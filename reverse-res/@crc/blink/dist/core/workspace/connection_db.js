"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionDB = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var ConnectionDB = /** @class */ (function () {
    function ConnectionDB() {
        this.connections = [];
        this.connections = new Array();
    }
    ConnectionDB.prototype.add_connection = function (connection) {
        if (connection.in_db) {
            throw new Error('Connection already in database.');
        }
        if (connection.get_source_block().is_in_flyout) {
            // Don't bother maintaining a database of connections in a flyout.
            return;
        }
        var position = this.find_position_for_connection(connection);
        this.connections.splice(position, 0, connection);
        connection.in_db = true;
    };
    ConnectionDB.prototype.find_connection = function (conn) {
        if (!this.connections.length) {
            return -1;
        }
        var bestGuess = this.find_position_for_connection(conn);
        if (bestGuess >= this.connections.length) {
            // Not in list
            return -1;
        }
        var yPos = conn.y_;
        // Walk forward and back on the y axis looking for the connection.
        var pointerMin = bestGuess;
        var pointerMax = bestGuess;
        while (pointerMin >= 0 && this.connections[pointerMin].y_ == yPos) {
            if (this.connections[pointerMin] == conn) {
                return pointerMin;
            }
            pointerMin--;
        }
        while (pointerMax < this.connections.length && this.connections[pointerMax].y_ == yPos) {
            if (this.connections[pointerMax] == conn) {
                return pointerMax;
            }
            pointerMax++;
        }
        return -1;
    };
    /**
     * Finds a candidate position for inserting this connection into the list.
     * This will be in the correct y order but makes no guarantees about ordering in
     *     the x axis.
     * @param connection The connection to insert.
     * @return The candidate index.
     */
    ConnectionDB.prototype.find_position_for_connection = function (connection) {
        if (!this.connections.length) {
            return 0;
        }
        var pointerMin = 0;
        var pointerMax = this.connections.length;
        while (pointerMin < pointerMax) {
            var pointerMid = Math.floor((pointerMin + pointerMax) / 2);
            if (this.connections[pointerMid].y_ < connection.y_) {
                pointerMin = pointerMid + 1;
            }
            else if (this.connections[pointerMid].y_ > connection.y_) {
                pointerMax = pointerMid;
            }
            else {
                pointerMin = pointerMid;
                break;
            }
        }
        return pointerMin;
    };
    ConnectionDB.prototype.remove_connection = function (connection) {
        if (!connection.in_db) {
            throw new Error('Connection not in database.');
        }
        var removalIndex = this.find_connection(connection);
        if (removalIndex == -1) {
            throw new Error('Unable to find connection in connectionDB.');
        }
        connection.in_db = false;
        this.connections.splice(removalIndex, 1);
    };
    ConnectionDB.prototype.get_neighbours = function (connection, max_radius) {
        var current_x = connection.x_;
        var current_y = connection.y_;
        var db = this.connections;
        // Binary search to find the closest y location.
        var pointerMin = 0;
        var pointerMax = db.length - 2;
        var pointerMid = pointerMax;
        while (pointerMin < pointerMid) {
            if (db[pointerMid].y_ < current_y) {
                pointerMin = pointerMid;
            }
            else {
                pointerMax = pointerMid;
            }
            pointerMid = Math.floor((pointerMin + pointerMax) / 2);
        }
        var neighbours = [];
        /**
         * Computes if the current connection is within the allowed radius of another
         * connection.
         * This function is a closure and has access to outside variables.
         * @param yIndex The other connection's index in the database.
         * @return True if the current connection's vertical distance from
         *     the other connection is less than the allowed radius.
         */
        function check_connection(yIndex) {
            var dx = current_x - db[yIndex].x_;
            var dy = current_y - db[yIndex].y_;
            var r = Math.sqrt(dx * dx + dy * dy);
            if (r <= max_radius) {
                neighbours.push(db[yIndex]);
            }
            return dy < max_radius;
        }
        // Walk forward and back on the y axis looking for the closest x,y point.
        pointerMin = pointerMid;
        pointerMax = pointerMid;
        if (db.length) {
            while (pointerMin >= 0 && check_connection(pointerMin)) {
                pointerMin--;
            }
            do {
                pointerMax++;
            } while (pointerMax < db.length && check_connection(pointerMax));
        }
        return neighbours;
    };
    /**
     * Is the candidate connection close to the reference connection.
     * Extremely fast; only looks at Y distance.
     * @param index Index in database of candidate connection.
     * @param baseY Reference connection's Y value.
     * @param maxRadius The maximum radius to another connection.
     * @return True if connection is in range.
     */
    ConnectionDB.prototype.is_in_y_range = function (index, baseY, maxRadius) {
        return (Math.abs(this.connections[index].y_ - baseY) <= maxRadius);
    };
    ConnectionDB.prototype.search_for_closest = function (conn, maxRadius, dxy) {
        // Don't bother.
        if (!conn.source_block.is_stack_connectable() || !this.connections.length) {
            return { connection: undefined, radius: maxRadius };
        }
        // Stash the values of x and y from before the drag.
        var baseY = conn.y_;
        var baseX = conn.x_;
        conn.x_ = baseX + dxy[0];
        conn.y_ = baseY + dxy[1];
        // findPositionForConnection finds an index for insertion, which is always
        // after any block with the same y index.  We want to search both forward
        // and back, so search on both sides of the index.
        var closestIndex = this.find_position_for_connection(conn);
        var bestConnection = undefined;
        var bestRadius = maxRadius;
        var temp;
        // Walk forward and back on the y axis looking for the closest x,y point.
        var pointerMin = closestIndex - 1;
        while (pointerMin >= 0 && this.is_in_y_range(pointerMin, conn.y_, maxRadius)) {
            temp = this.connections[pointerMin];
            if (conn.is_connection_allowed(temp, bestRadius)) {
                bestConnection = temp;
                bestRadius = temp.distance_from(conn);
            }
            pointerMin--;
        }
        var pointerMax = closestIndex;
        while (pointerMax < this.connections.length && this.is_in_y_range(pointerMax, conn.y_, maxRadius)) {
            temp = this.connections[pointerMax];
            if (conn.is_connection_allowed(temp, bestRadius)) {
                bestConnection = temp;
                bestRadius = temp.distance_from(conn);
            }
            pointerMax++;
        }
        // Reset the values of x and y.
        conn.x_ = baseX;
        conn.y_ = baseY;
        // If there were no valid connections, bestConnection will be undefined.
        return { connection: bestConnection, radius: bestRadius };
    };
    ConnectionDB = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
        /**
         * Database of connections.
         * Connections are stored in order of their vertical component.  This way
         * connections in an area may be looked up quickly using a binary search.
         */
    ], ConnectionDB);
    return ConnectionDB;
}());
exports.ConnectionDB = ConnectionDB;
