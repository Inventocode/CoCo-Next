"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceAudio = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var dom_1 = require("../utils/dom");
var is_1 = require("../utils/is");
var di_1 = require("../di");
/**
 * Object in charge of loading, storing, and playing audio for a workspace.
 */
var WorkspaceAudio = /** @class */ (function () {
    /**
     * Creates an instance of WorkspaceAudio.
     * Class for loading, storing, and playing audio for a workspace.
     * @param parent_workspace The parent of the workspace
     *  this audio object belongs to, or undefined.
     */
    function WorkspaceAudio(parent_workspace) {
        /**
         * Time that the last sound was played.
         */
        this.last_sound_ = undefined;
        /**
         * Database of pre-loaded sounds.
         */
        this.SOUNDS_ = {};
        this.parent_workspace_ = parent_workspace;
    }
    WorkspaceAudio.prototype.load = function (filenames, name) {
        if (!filenames.length) {
            return;
        }
        var audioTest;
        try {
            audioTest = new window.Audio();
        }
        catch (e) {
            // No browser support for Audio.
            // IE can throw an error even if the Audio object exists.
            return;
        }
        var sound;
        for (var i = 0; i < filenames.length; i++) {
            var filename = filenames[i];
            var ext = filename.match(/\.(\w+)$/);
            if (ext && audioTest.canPlayType("audio/" + ext[1])) {
                // Found an audio format we can play.
                sound = new window.Audio(filename);
                break;
            }
        }
        if (sound && sound.play) {
            this.SOUNDS_[name] = sound;
        }
    };
    WorkspaceAudio.prototype.play = function (name, opt_volume) {
        var sound = this.SOUNDS_[name];
        if (sound) {
            // Don't play one sound on top of another.
            var now = Date.now();
            if (this.last_sound_ != undefined && now - this.last_sound_ < this.theme.blink_params.SOUND_LIMIT) {
                return;
            }
            this.last_sound_ = now;
            var mySound = void 0;
            if (is_1.is.ie(9) || is_1.is.ipad() || is_1.is.android()) {
                // Creating a new audio node causes lag in IE9, Android and iPad.
                // Android and IE9 refetch the file from the server,
                // iPad uses a singleton audio node which must be deleted and recreated for each new audio tag.
                mySound = sound;
            }
            else {
                mySound = (0, dom_1.clone_node)(sound);
            }
            mySound.volume = (opt_volume == undefined ? 1 : opt_volume);
            // Will not return a promise under Chrome 50
            // https://developers.google.com/web/updates/2016/03/play-returns-promise
            var play_promise = mySound.play();
            if (play_promise) {
                play_promise.catch(function (err) { console.log(err); });
            }
        }
        else if (this.parent_workspace_) {
            // Maybe a workspace on a lower level knows about this sound.
            var parent_audio_manager = this.parent_workspace_.get_audio_manager();
            parent_audio_manager && parent_audio_manager.play(name, opt_volume);
        }
    };
    WorkspaceAudio.prototype.preload = function () {
        for (var name_1 in this.SOUNDS_) {
            var sound = this.SOUNDS_[name_1];
            sound.volume = .01;
            // Uncaught (in promise) DOMException: play() failed because the user didn't interact with the document first.
            // sound.play();
            // sound.pause();
            // iOS can only process one sound at a time.  Trying to load more than one
            // corrupts the earlier ones.  Just load one and leave the others uncached.
            if (is_1.is.ipad() || is_1.is.iphone()) {
                break;
            }
        }
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.theme)
    ], WorkspaceAudio.prototype, "theme", void 0);
    WorkspaceAudio = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], WorkspaceAudio);
    return WorkspaceAudio;
}());
exports.WorkspaceAudio = WorkspaceAudio;
