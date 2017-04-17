
import { IState as IStateBase } from 'asyncmachine/src/types'


/**
 * Signatures for EventEmitter to bind to transitions.
 */
export interface IBind {

    // AutoplayOn
    (event: 'AutoplayOn_enter', listener: (/* param1, param2 */) => boolean | undefined, context?: Object): this;
    (event: 'AutoplayOn_state', listener: (/* param1, param2 */) => any, context?: Object): this;
    // Playing
    (event: 'Playing_enter', listener: (/* param1, param2 */) => boolean | undefined, context?: Object): this;
    (event: 'Playing_state', listener: (/* param1, param2 */) => any, context?: Object): this;
    // DOMReady
    (event: 'DOMReady_enter', listener: (/* param1, param2 */) => boolean | undefined, context?: Object): this;
    (event: 'DOMReady_state', listener: (/* param1, param2 */) => any, context?: Object): this;
    // Rendering
    (event: 'Rendering_enter', listener: (/* param1, param2 */) => boolean | undefined, context?: Object): this;
    (event: 'Rendering_state', listener: (/* param1, param2 */) => any, context?: Object): this;
    // Rendered
    (event: 'Rendered_enter', listener: (/* param1, param2 */) => boolean | undefined, context?: Object): this;
    (event: 'Rendered_state', listener: (/* param1, param2 */) => any, context?: Object): this;
    // InitialRenderDone
    (event: 'InitialRenderDone_enter', listener: (/* param1, param2 */) => boolean | undefined, context?: Object): this;
    (event: 'InitialRenderDone_state', listener: (/* param1, param2 */) => any, context?: Object): this;
    // Connecting
    (event: 'Connecting_enter', listener: (/* param1, param2 */) => boolean | undefined, context?: Object): this;
    (event: 'Connecting_state', listener: (/* param1, param2 */) => any, context?: Object): this;
    // Connected
    (event: 'Connected_enter', listener: (/* param1, param2 */) => boolean | undefined, context?: Object): this;
    (event: 'Connected_state', listener: (/* param1, param2 */) => any, context?: Object): this;
    // Joining
    (event: 'Joining_enter', listener: (/* param1, param2 */) => boolean | undefined, context?: Object): this;
    (event: 'Joining_state', listener: (/* param1, param2 */) => any, context?: Object): this;
    // Joined
    (event: 'Joined_enter', listener: (/* param1, param2 */) => boolean | undefined, context?: Object): this;
    (event: 'Joined_state', listener: (/* param1, param2 */) => any, context?: Object): this;
    // Disconnected
    (event: 'Disconnected_enter', listener: (/* param1, param2 */) => boolean | undefined, context?: Object): this;
    (event: 'Disconnected_state', listener: (/* param1, param2 */) => any, context?: Object): this;
    // TimelineOnFirst
    (event: 'TimelineOnFirst_enter', listener: (/* param1, param2 */) => boolean | undefined, context?: Object): this;
    (event: 'TimelineOnFirst_state', listener: (/* param1, param2 */) => any, context?: Object): this;
    // TimelineOnLast
    (event: 'TimelineOnLast_enter', listener: (/* param1, param2 */) => boolean | undefined, context?: Object): this;
    (event: 'TimelineOnLast_state', listener: (/* param1, param2 */) => any, context?: Object): this;
    // StepByStates
    (event: 'StepByStates_enter', listener: (/* param1, param2 */) => boolean | undefined, context?: Object): this;
    (event: 'StepByStates_state', listener: (/* param1, param2 */) => any, context?: Object): this;
    // StepByTransitions
    (event: 'StepByTransitions_enter', listener: (/* param1, param2 */) => boolean | undefined, context?: Object): this;
    (event: 'StepByTransitions_state', listener: (/* param1, param2 */) => any, context?: Object): this;
    // StepBySteps
    (event: 'StepBySteps_enter', listener: (/* param1, param2 */) => boolean | undefined, context?: Object): this;
    (event: 'StepBySteps_state', listener: (/* param1, param2 */) => any, context?: Object): this;
    // PlayStopClicked
    (event: 'PlayStopClicked_enter', listener: (/* param1, param2 */) => boolean | undefined, context?: Object): this;
    (event: 'PlayStopClicked_state', listener: (/* param1, param2 */) => any, context?: Object): this;
    // TimelineScrolled
    (event: 'TimelineScrolled_enter', listener: (/* param1, param2 */) => boolean | undefined, context?: Object): this;
    (event: 'TimelineScrolled_state', listener: (/* param1, param2 */) => any, context?: Object): this;
    // StepTypeChanged
    (event: 'StepTypeChanged_enter', listener: (/* param1, param2 */) => boolean | undefined, context?: Object): this;
    (event: 'StepTypeChanged_state', listener: (/* param1, param2 */) => any, context?: Object): this;
    // FullSync
    (event: 'FullSync_enter', listener: (/* param1, param2 */) => boolean | undefined, context?: Object): this;
    (event: 'FullSync_state', listener: (/* param1, param2 */) => any, context?: Object): this;
    // DiffSync
    (event: 'DiffSync_enter', listener: (/* param1, param2 */) => boolean | undefined, context?: Object): this;
    (event: 'DiffSync_state', listener: (/* param1, param2 */) => any, context?: Object): this;

}

/**
 * Signatures for EventEmitter to emit transitions.
 */
export interface IEmit {

    // AutoplayOn
    (event: 'AutoplayOn_enter' /*, param1, param2 */): boolean | void;
    (event: 'AutoplayOn_state' /*, param1, param2 */): boolean | void;
    // Playing
    (event: 'Playing_enter' /*, param1, param2 */): boolean | void;
    (event: 'Playing_state' /*, param1, param2 */): boolean | void;
    // DOMReady
    (event: 'DOMReady_enter' /*, param1, param2 */): boolean | void;
    (event: 'DOMReady_state' /*, param1, param2 */): boolean | void;
    // Rendering
    (event: 'Rendering_enter' /*, param1, param2 */): boolean | void;
    (event: 'Rendering_state' /*, param1, param2 */): boolean | void;
    // Rendered
    (event: 'Rendered_enter' /*, param1, param2 */): boolean | void;
    (event: 'Rendered_state' /*, param1, param2 */): boolean | void;
    // InitialRenderDone
    (event: 'InitialRenderDone_enter' /*, param1, param2 */): boolean | void;
    (event: 'InitialRenderDone_state' /*, param1, param2 */): boolean | void;
    // Connecting
    (event: 'Connecting_enter' /*, param1, param2 */): boolean | void;
    (event: 'Connecting_state' /*, param1, param2 */): boolean | void;
    // Connected
    (event: 'Connected_enter' /*, param1, param2 */): boolean | void;
    (event: 'Connected_state' /*, param1, param2 */): boolean | void;
    // Joining
    (event: 'Joining_enter' /*, param1, param2 */): boolean | void;
    (event: 'Joining_state' /*, param1, param2 */): boolean | void;
    // Joined
    (event: 'Joined_enter' /*, param1, param2 */): boolean | void;
    (event: 'Joined_state' /*, param1, param2 */): boolean | void;
    // Disconnected
    (event: 'Disconnected_enter' /*, param1, param2 */): boolean | void;
    (event: 'Disconnected_state' /*, param1, param2 */): boolean | void;
    // TimelineOnFirst
    (event: 'TimelineOnFirst_enter' /*, param1, param2 */): boolean | void;
    (event: 'TimelineOnFirst_state' /*, param1, param2 */): boolean | void;
    // TimelineOnLast
    (event: 'TimelineOnLast_enter' /*, param1, param2 */): boolean | void;
    (event: 'TimelineOnLast_state' /*, param1, param2 */): boolean | void;
    // StepByStates
    (event: 'StepByStates_enter' /*, param1, param2 */): boolean | void;
    (event: 'StepByStates_state' /*, param1, param2 */): boolean | void;
    // StepByTransitions
    (event: 'StepByTransitions_enter' /*, param1, param2 */): boolean | void;
    (event: 'StepByTransitions_state' /*, param1, param2 */): boolean | void;
    // StepBySteps
    (event: 'StepBySteps_enter' /*, param1, param2 */): boolean | void;
    (event: 'StepBySteps_state' /*, param1, param2 */): boolean | void;
    // PlayStopClicked
    (event: 'PlayStopClicked_enter' /*, param1, param2 */): boolean | void;
    (event: 'PlayStopClicked_state' /*, param1, param2 */): boolean | void;
    // TimelineScrolled
    (event: 'TimelineScrolled_enter' /*, param1, param2 */): boolean | void;
    (event: 'TimelineScrolled_state' /*, param1, param2 */): boolean | void;
    // StepTypeChanged
    (event: 'StepTypeChanged_enter' /*, param1, param2 */): boolean | void;
    (event: 'StepTypeChanged_state' /*, param1, param2 */): boolean | void;
    // FullSync
    (event: 'FullSync_enter' /*, param1, param2 */): boolean | void;
    (event: 'FullSync_state' /*, param1, param2 */): boolean | void;
    // DiffSync
    (event: 'DiffSync_enter' /*, param1, param2 */): boolean | void;
    (event: 'DiffSync_state' /*, param1, param2 */): boolean | void;

}

/**
 * All the possible transition methods machine can define.
 */
export interface ITransitions {

    // AutoplayOn
    AutoplayOn_enter?(/*param1, param2 */): boolean | void;
    AutoplayOn_state?(/*param1, param2 */): boolean | void | Promise;
    // Playing
    Playing_enter?(/*param1, param2 */): boolean | void;
    Playing_state?(/*param1, param2 */): boolean | void | Promise;
    // DOMReady
    DOMReady_enter?(/*param1, param2 */): boolean | void;
    DOMReady_state?(/*param1, param2 */): boolean | void | Promise;
    // Rendering
    Rendering_enter?(/*param1, param2 */): boolean | void;
    Rendering_state?(/*param1, param2 */): boolean | void | Promise;
    // Rendered
    Rendered_enter?(/*param1, param2 */): boolean | void;
    Rendered_state?(/*param1, param2 */): boolean | void | Promise;
    // InitialRenderDone
    InitialRenderDone_enter?(/*param1, param2 */): boolean | void;
    InitialRenderDone_state?(/*param1, param2 */): boolean | void | Promise;
    // Connecting
    Connecting_enter?(/*param1, param2 */): boolean | void;
    Connecting_state?(/*param1, param2 */): boolean | void | Promise;
    // Connected
    Connected_enter?(/*param1, param2 */): boolean | void;
    Connected_state?(/*param1, param2 */): boolean | void | Promise;
    // Joining
    Joining_enter?(/*param1, param2 */): boolean | void;
    Joining_state?(/*param1, param2 */): boolean | void | Promise;
    // Joined
    Joined_enter?(/*param1, param2 */): boolean | void;
    Joined_state?(/*param1, param2 */): boolean | void | Promise;
    // Disconnected
    Disconnected_enter?(/*param1, param2 */): boolean | void;
    Disconnected_state?(/*param1, param2 */): boolean | void | Promise;
    // TimelineOnFirst
    TimelineOnFirst_enter?(/*param1, param2 */): boolean | void;
    TimelineOnFirst_state?(/*param1, param2 */): boolean | void | Promise;
    // TimelineOnLast
    TimelineOnLast_enter?(/*param1, param2 */): boolean | void;
    TimelineOnLast_state?(/*param1, param2 */): boolean | void | Promise;
    // StepByStates
    StepByStates_enter?(/*param1, param2 */): boolean | void;
    StepByStates_state?(/*param1, param2 */): boolean | void | Promise;
    // StepByTransitions
    StepByTransitions_enter?(/*param1, param2 */): boolean | void;
    StepByTransitions_state?(/*param1, param2 */): boolean | void | Promise;
    // StepBySteps
    StepBySteps_enter?(/*param1, param2 */): boolean | void;
    StepBySteps_state?(/*param1, param2 */): boolean | void | Promise;
    // PlayStopClicked
    PlayStopClicked_enter?(/*param1, param2 */): boolean | void;
    PlayStopClicked_state?(/*param1, param2 */): boolean | void | Promise;
    // TimelineScrolled
    TimelineScrolled_enter?(/*param1, param2 */): boolean | void;
    TimelineScrolled_state?(/*param1, param2 */): boolean | void | Promise;
    // StepTypeChanged
    StepTypeChanged_enter?(/*param1, param2 */): boolean | void;
    StepTypeChanged_state?(/*param1, param2 */): boolean | void | Promise;
    // FullSync
    FullSync_enter?(/*param1, param2 */): boolean | void;
    FullSync_state?(/*param1, param2 */): boolean | void | Promise;
    // DiffSync
    DiffSync_enter?(/*param1, param2 */): boolean | void;
    DiffSync_state?(/*param1, param2 */): boolean | void | Promise;


    AutoplayOn_exit?(): boolean | void;
    AutoplayOn_end?(): boolean | void | Promise;
    Playing_exit?(): boolean | void;
    Playing_end?(): boolean | void | Promise;
    DOMReady_exit?(): boolean | void;
    DOMReady_end?(): boolean | void | Promise;
    Rendering_exit?(): boolean | void;
    Rendering_end?(): boolean | void | Promise;
    Rendered_exit?(): boolean | void;
    Rendered_end?(): boolean | void | Promise;
    InitialRenderDone_exit?(): boolean | void;
    InitialRenderDone_end?(): boolean | void | Promise;
    Connecting_exit?(): boolean | void;
    Connecting_end?(): boolean | void | Promise;
    Connected_exit?(): boolean | void;
    Connected_end?(): boolean | void | Promise;
    Joining_exit?(): boolean | void;
    Joining_end?(): boolean | void | Promise;
    Joined_exit?(): boolean | void;
    Joined_end?(): boolean | void | Promise;
    Disconnected_exit?(): boolean | void;
    Disconnected_end?(): boolean | void | Promise;
    TimelineOnFirst_exit?(): boolean | void;
    TimelineOnFirst_end?(): boolean | void | Promise;
    TimelineOnLast_exit?(): boolean | void;
    TimelineOnLast_end?(): boolean | void | Promise;
    StepByStates_exit?(): boolean | void;
    StepByStates_end?(): boolean | void | Promise;
    StepByTransitions_exit?(): boolean | void;
    StepByTransitions_end?(): boolean | void | Promise;
    StepBySteps_exit?(): boolean | void;
    StepBySteps_end?(): boolean | void | Promise;
    PlayStopClicked_exit?(): boolean | void;
    PlayStopClicked_end?(): boolean | void | Promise;
    TimelineScrolled_exit?(): boolean | void;
    TimelineScrolled_end?(): boolean | void | Promise;
    StepTypeChanged_exit?(): boolean | void;
    StepTypeChanged_end?(): boolean | void | Promise;
    FullSync_exit?(): boolean | void;
    FullSync_end?(): boolean | void | Promise;
    DiffSync_exit?(): boolean | void;
    DiffSync_end?(): boolean | void | Promise;

    Exception_AutoplayOn?(): boolean | void;
    Exception_Playing?(): boolean | void;
    Exception_DOMReady?(): boolean | void;
    Exception_Rendering?(): boolean | void;
    Exception_Rendered?(): boolean | void;
    Exception_InitialRenderDone?(): boolean | void;
    Exception_Connecting?(): boolean | void;
    Exception_Connected?(): boolean | void;
    Exception_Joining?(): boolean | void;
    Exception_Joined?(): boolean | void;
    Exception_Disconnected?(): boolean | void;
    Exception_TimelineOnFirst?(): boolean | void;
    Exception_TimelineOnLast?(): boolean | void;
    Exception_StepByStates?(): boolean | void;
    Exception_StepByTransitions?(): boolean | void;
    Exception_StepBySteps?(): boolean | void;
    Exception_PlayStopClicked?(): boolean | void;
    Exception_TimelineScrolled?(): boolean | void;
    Exception_StepTypeChanged?(): boolean | void;
    Exception_FullSync?(): boolean | void;
    Exception_DiffSync?(): boolean | void;
    AutoplayOn_Exception?(): boolean | void;
    AutoplayOn_Any?(): boolean | void;
    AutoplayOn_Playing?(): boolean | void;
    AutoplayOn_DOMReady?(): boolean | void;
    AutoplayOn_Rendering?(): boolean | void;
    AutoplayOn_Rendered?(): boolean | void;
    AutoplayOn_InitialRenderDone?(): boolean | void;
    AutoplayOn_Connecting?(): boolean | void;
    AutoplayOn_Connected?(): boolean | void;
    AutoplayOn_Joining?(): boolean | void;
    AutoplayOn_Joined?(): boolean | void;
    AutoplayOn_Disconnected?(): boolean | void;
    AutoplayOn_TimelineOnFirst?(): boolean | void;
    AutoplayOn_TimelineOnLast?(): boolean | void;
    AutoplayOn_StepByStates?(): boolean | void;
    AutoplayOn_StepByTransitions?(): boolean | void;
    AutoplayOn_StepBySteps?(): boolean | void;
    AutoplayOn_PlayStopClicked?(): boolean | void;
    AutoplayOn_TimelineScrolled?(): boolean | void;
    AutoplayOn_StepTypeChanged?(): boolean | void;
    AutoplayOn_FullSync?(): boolean | void;
    AutoplayOn_DiffSync?(): boolean | void;
    AutoplayOn_Exception?(): boolean | void;
    Playing_Exception?(): boolean | void;
    Playing_AutoplayOn?(): boolean | void;
    Playing_Any?(): boolean | void;
    Playing_DOMReady?(): boolean | void;
    Playing_Rendering?(): boolean | void;
    Playing_Rendered?(): boolean | void;
    Playing_InitialRenderDone?(): boolean | void;
    Playing_Connecting?(): boolean | void;
    Playing_Connected?(): boolean | void;
    Playing_Joining?(): boolean | void;
    Playing_Joined?(): boolean | void;
    Playing_Disconnected?(): boolean | void;
    Playing_TimelineOnFirst?(): boolean | void;
    Playing_TimelineOnLast?(): boolean | void;
    Playing_StepByStates?(): boolean | void;
    Playing_StepByTransitions?(): boolean | void;
    Playing_StepBySteps?(): boolean | void;
    Playing_PlayStopClicked?(): boolean | void;
    Playing_TimelineScrolled?(): boolean | void;
    Playing_StepTypeChanged?(): boolean | void;
    Playing_FullSync?(): boolean | void;
    Playing_DiffSync?(): boolean | void;
    Playing_Exception?(): boolean | void;
    DOMReady_Exception?(): boolean | void;
    DOMReady_AutoplayOn?(): boolean | void;
    DOMReady_Playing?(): boolean | void;
    DOMReady_Any?(): boolean | void;
    DOMReady_Rendering?(): boolean | void;
    DOMReady_Rendered?(): boolean | void;
    DOMReady_InitialRenderDone?(): boolean | void;
    DOMReady_Connecting?(): boolean | void;
    DOMReady_Connected?(): boolean | void;
    DOMReady_Joining?(): boolean | void;
    DOMReady_Joined?(): boolean | void;
    DOMReady_Disconnected?(): boolean | void;
    DOMReady_TimelineOnFirst?(): boolean | void;
    DOMReady_TimelineOnLast?(): boolean | void;
    DOMReady_StepByStates?(): boolean | void;
    DOMReady_StepByTransitions?(): boolean | void;
    DOMReady_StepBySteps?(): boolean | void;
    DOMReady_PlayStopClicked?(): boolean | void;
    DOMReady_TimelineScrolled?(): boolean | void;
    DOMReady_StepTypeChanged?(): boolean | void;
    DOMReady_FullSync?(): boolean | void;
    DOMReady_DiffSync?(): boolean | void;
    DOMReady_Exception?(): boolean | void;
    Rendering_Exception?(): boolean | void;
    Rendering_AutoplayOn?(): boolean | void;
    Rendering_Playing?(): boolean | void;
    Rendering_DOMReady?(): boolean | void;
    Rendering_Any?(): boolean | void;
    Rendering_Rendered?(): boolean | void;
    Rendering_InitialRenderDone?(): boolean | void;
    Rendering_Connecting?(): boolean | void;
    Rendering_Connected?(): boolean | void;
    Rendering_Joining?(): boolean | void;
    Rendering_Joined?(): boolean | void;
    Rendering_Disconnected?(): boolean | void;
    Rendering_TimelineOnFirst?(): boolean | void;
    Rendering_TimelineOnLast?(): boolean | void;
    Rendering_StepByStates?(): boolean | void;
    Rendering_StepByTransitions?(): boolean | void;
    Rendering_StepBySteps?(): boolean | void;
    Rendering_PlayStopClicked?(): boolean | void;
    Rendering_TimelineScrolled?(): boolean | void;
    Rendering_StepTypeChanged?(): boolean | void;
    Rendering_FullSync?(): boolean | void;
    Rendering_DiffSync?(): boolean | void;
    Rendering_Exception?(): boolean | void;
    Rendered_Exception?(): boolean | void;
    Rendered_AutoplayOn?(): boolean | void;
    Rendered_Playing?(): boolean | void;
    Rendered_DOMReady?(): boolean | void;
    Rendered_Rendering?(): boolean | void;
    Rendered_Any?(): boolean | void;
    Rendered_InitialRenderDone?(): boolean | void;
    Rendered_Connecting?(): boolean | void;
    Rendered_Connected?(): boolean | void;
    Rendered_Joining?(): boolean | void;
    Rendered_Joined?(): boolean | void;
    Rendered_Disconnected?(): boolean | void;
    Rendered_TimelineOnFirst?(): boolean | void;
    Rendered_TimelineOnLast?(): boolean | void;
    Rendered_StepByStates?(): boolean | void;
    Rendered_StepByTransitions?(): boolean | void;
    Rendered_StepBySteps?(): boolean | void;
    Rendered_PlayStopClicked?(): boolean | void;
    Rendered_TimelineScrolled?(): boolean | void;
    Rendered_StepTypeChanged?(): boolean | void;
    Rendered_FullSync?(): boolean | void;
    Rendered_DiffSync?(): boolean | void;
    Rendered_Exception?(): boolean | void;
    InitialRenderDone_Exception?(): boolean | void;
    InitialRenderDone_AutoplayOn?(): boolean | void;
    InitialRenderDone_Playing?(): boolean | void;
    InitialRenderDone_DOMReady?(): boolean | void;
    InitialRenderDone_Rendering?(): boolean | void;
    InitialRenderDone_Rendered?(): boolean | void;
    InitialRenderDone_Any?(): boolean | void;
    InitialRenderDone_Connecting?(): boolean | void;
    InitialRenderDone_Connected?(): boolean | void;
    InitialRenderDone_Joining?(): boolean | void;
    InitialRenderDone_Joined?(): boolean | void;
    InitialRenderDone_Disconnected?(): boolean | void;
    InitialRenderDone_TimelineOnFirst?(): boolean | void;
    InitialRenderDone_TimelineOnLast?(): boolean | void;
    InitialRenderDone_StepByStates?(): boolean | void;
    InitialRenderDone_StepByTransitions?(): boolean | void;
    InitialRenderDone_StepBySteps?(): boolean | void;
    InitialRenderDone_PlayStopClicked?(): boolean | void;
    InitialRenderDone_TimelineScrolled?(): boolean | void;
    InitialRenderDone_StepTypeChanged?(): boolean | void;
    InitialRenderDone_FullSync?(): boolean | void;
    InitialRenderDone_DiffSync?(): boolean | void;
    InitialRenderDone_Exception?(): boolean | void;
    Connecting_Exception?(): boolean | void;
    Connecting_AutoplayOn?(): boolean | void;
    Connecting_Playing?(): boolean | void;
    Connecting_DOMReady?(): boolean | void;
    Connecting_Rendering?(): boolean | void;
    Connecting_Rendered?(): boolean | void;
    Connecting_InitialRenderDone?(): boolean | void;
    Connecting_Any?(): boolean | void;
    Connecting_Connected?(): boolean | void;
    Connecting_Joining?(): boolean | void;
    Connecting_Joined?(): boolean | void;
    Connecting_Disconnected?(): boolean | void;
    Connecting_TimelineOnFirst?(): boolean | void;
    Connecting_TimelineOnLast?(): boolean | void;
    Connecting_StepByStates?(): boolean | void;
    Connecting_StepByTransitions?(): boolean | void;
    Connecting_StepBySteps?(): boolean | void;
    Connecting_PlayStopClicked?(): boolean | void;
    Connecting_TimelineScrolled?(): boolean | void;
    Connecting_StepTypeChanged?(): boolean | void;
    Connecting_FullSync?(): boolean | void;
    Connecting_DiffSync?(): boolean | void;
    Connecting_Exception?(): boolean | void;
    Connected_Exception?(): boolean | void;
    Connected_AutoplayOn?(): boolean | void;
    Connected_Playing?(): boolean | void;
    Connected_DOMReady?(): boolean | void;
    Connected_Rendering?(): boolean | void;
    Connected_Rendered?(): boolean | void;
    Connected_InitialRenderDone?(): boolean | void;
    Connected_Connecting?(): boolean | void;
    Connected_Any?(): boolean | void;
    Connected_Joining?(): boolean | void;
    Connected_Joined?(): boolean | void;
    Connected_Disconnected?(): boolean | void;
    Connected_TimelineOnFirst?(): boolean | void;
    Connected_TimelineOnLast?(): boolean | void;
    Connected_StepByStates?(): boolean | void;
    Connected_StepByTransitions?(): boolean | void;
    Connected_StepBySteps?(): boolean | void;
    Connected_PlayStopClicked?(): boolean | void;
    Connected_TimelineScrolled?(): boolean | void;
    Connected_StepTypeChanged?(): boolean | void;
    Connected_FullSync?(): boolean | void;
    Connected_DiffSync?(): boolean | void;
    Connected_Exception?(): boolean | void;
    Joining_Exception?(): boolean | void;
    Joining_AutoplayOn?(): boolean | void;
    Joining_Playing?(): boolean | void;
    Joining_DOMReady?(): boolean | void;
    Joining_Rendering?(): boolean | void;
    Joining_Rendered?(): boolean | void;
    Joining_InitialRenderDone?(): boolean | void;
    Joining_Connecting?(): boolean | void;
    Joining_Connected?(): boolean | void;
    Joining_Any?(): boolean | void;
    Joining_Joined?(): boolean | void;
    Joining_Disconnected?(): boolean | void;
    Joining_TimelineOnFirst?(): boolean | void;
    Joining_TimelineOnLast?(): boolean | void;
    Joining_StepByStates?(): boolean | void;
    Joining_StepByTransitions?(): boolean | void;
    Joining_StepBySteps?(): boolean | void;
    Joining_PlayStopClicked?(): boolean | void;
    Joining_TimelineScrolled?(): boolean | void;
    Joining_StepTypeChanged?(): boolean | void;
    Joining_FullSync?(): boolean | void;
    Joining_DiffSync?(): boolean | void;
    Joining_Exception?(): boolean | void;
    Joined_Exception?(): boolean | void;
    Joined_AutoplayOn?(): boolean | void;
    Joined_Playing?(): boolean | void;
    Joined_DOMReady?(): boolean | void;
    Joined_Rendering?(): boolean | void;
    Joined_Rendered?(): boolean | void;
    Joined_InitialRenderDone?(): boolean | void;
    Joined_Connecting?(): boolean | void;
    Joined_Connected?(): boolean | void;
    Joined_Joining?(): boolean | void;
    Joined_Any?(): boolean | void;
    Joined_Disconnected?(): boolean | void;
    Joined_TimelineOnFirst?(): boolean | void;
    Joined_TimelineOnLast?(): boolean | void;
    Joined_StepByStates?(): boolean | void;
    Joined_StepByTransitions?(): boolean | void;
    Joined_StepBySteps?(): boolean | void;
    Joined_PlayStopClicked?(): boolean | void;
    Joined_TimelineScrolled?(): boolean | void;
    Joined_StepTypeChanged?(): boolean | void;
    Joined_FullSync?(): boolean | void;
    Joined_DiffSync?(): boolean | void;
    Joined_Exception?(): boolean | void;
    Disconnected_Exception?(): boolean | void;
    Disconnected_AutoplayOn?(): boolean | void;
    Disconnected_Playing?(): boolean | void;
    Disconnected_DOMReady?(): boolean | void;
    Disconnected_Rendering?(): boolean | void;
    Disconnected_Rendered?(): boolean | void;
    Disconnected_InitialRenderDone?(): boolean | void;
    Disconnected_Connecting?(): boolean | void;
    Disconnected_Connected?(): boolean | void;
    Disconnected_Joining?(): boolean | void;
    Disconnected_Joined?(): boolean | void;
    Disconnected_Any?(): boolean | void;
    Disconnected_TimelineOnFirst?(): boolean | void;
    Disconnected_TimelineOnLast?(): boolean | void;
    Disconnected_StepByStates?(): boolean | void;
    Disconnected_StepByTransitions?(): boolean | void;
    Disconnected_StepBySteps?(): boolean | void;
    Disconnected_PlayStopClicked?(): boolean | void;
    Disconnected_TimelineScrolled?(): boolean | void;
    Disconnected_StepTypeChanged?(): boolean | void;
    Disconnected_FullSync?(): boolean | void;
    Disconnected_DiffSync?(): boolean | void;
    Disconnected_Exception?(): boolean | void;
    TimelineOnFirst_Exception?(): boolean | void;
    TimelineOnFirst_AutoplayOn?(): boolean | void;
    TimelineOnFirst_Playing?(): boolean | void;
    TimelineOnFirst_DOMReady?(): boolean | void;
    TimelineOnFirst_Rendering?(): boolean | void;
    TimelineOnFirst_Rendered?(): boolean | void;
    TimelineOnFirst_InitialRenderDone?(): boolean | void;
    TimelineOnFirst_Connecting?(): boolean | void;
    TimelineOnFirst_Connected?(): boolean | void;
    TimelineOnFirst_Joining?(): boolean | void;
    TimelineOnFirst_Joined?(): boolean | void;
    TimelineOnFirst_Disconnected?(): boolean | void;
    TimelineOnFirst_Any?(): boolean | void;
    TimelineOnFirst_TimelineOnLast?(): boolean | void;
    TimelineOnFirst_StepByStates?(): boolean | void;
    TimelineOnFirst_StepByTransitions?(): boolean | void;
    TimelineOnFirst_StepBySteps?(): boolean | void;
    TimelineOnFirst_PlayStopClicked?(): boolean | void;
    TimelineOnFirst_TimelineScrolled?(): boolean | void;
    TimelineOnFirst_StepTypeChanged?(): boolean | void;
    TimelineOnFirst_FullSync?(): boolean | void;
    TimelineOnFirst_DiffSync?(): boolean | void;
    TimelineOnFirst_Exception?(): boolean | void;
    TimelineOnLast_Exception?(): boolean | void;
    TimelineOnLast_AutoplayOn?(): boolean | void;
    TimelineOnLast_Playing?(): boolean | void;
    TimelineOnLast_DOMReady?(): boolean | void;
    TimelineOnLast_Rendering?(): boolean | void;
    TimelineOnLast_Rendered?(): boolean | void;
    TimelineOnLast_InitialRenderDone?(): boolean | void;
    TimelineOnLast_Connecting?(): boolean | void;
    TimelineOnLast_Connected?(): boolean | void;
    TimelineOnLast_Joining?(): boolean | void;
    TimelineOnLast_Joined?(): boolean | void;
    TimelineOnLast_Disconnected?(): boolean | void;
    TimelineOnLast_TimelineOnFirst?(): boolean | void;
    TimelineOnLast_Any?(): boolean | void;
    TimelineOnLast_StepByStates?(): boolean | void;
    TimelineOnLast_StepByTransitions?(): boolean | void;
    TimelineOnLast_StepBySteps?(): boolean | void;
    TimelineOnLast_PlayStopClicked?(): boolean | void;
    TimelineOnLast_TimelineScrolled?(): boolean | void;
    TimelineOnLast_StepTypeChanged?(): boolean | void;
    TimelineOnLast_FullSync?(): boolean | void;
    TimelineOnLast_DiffSync?(): boolean | void;
    TimelineOnLast_Exception?(): boolean | void;
    StepByStates_Exception?(): boolean | void;
    StepByStates_AutoplayOn?(): boolean | void;
    StepByStates_Playing?(): boolean | void;
    StepByStates_DOMReady?(): boolean | void;
    StepByStates_Rendering?(): boolean | void;
    StepByStates_Rendered?(): boolean | void;
    StepByStates_InitialRenderDone?(): boolean | void;
    StepByStates_Connecting?(): boolean | void;
    StepByStates_Connected?(): boolean | void;
    StepByStates_Joining?(): boolean | void;
    StepByStates_Joined?(): boolean | void;
    StepByStates_Disconnected?(): boolean | void;
    StepByStates_TimelineOnFirst?(): boolean | void;
    StepByStates_TimelineOnLast?(): boolean | void;
    StepByStates_Any?(): boolean | void;
    StepByStates_StepByTransitions?(): boolean | void;
    StepByStates_StepBySteps?(): boolean | void;
    StepByStates_PlayStopClicked?(): boolean | void;
    StepByStates_TimelineScrolled?(): boolean | void;
    StepByStates_StepTypeChanged?(): boolean | void;
    StepByStates_FullSync?(): boolean | void;
    StepByStates_DiffSync?(): boolean | void;
    StepByStates_Exception?(): boolean | void;
    StepByTransitions_Exception?(): boolean | void;
    StepByTransitions_AutoplayOn?(): boolean | void;
    StepByTransitions_Playing?(): boolean | void;
    StepByTransitions_DOMReady?(): boolean | void;
    StepByTransitions_Rendering?(): boolean | void;
    StepByTransitions_Rendered?(): boolean | void;
    StepByTransitions_InitialRenderDone?(): boolean | void;
    StepByTransitions_Connecting?(): boolean | void;
    StepByTransitions_Connected?(): boolean | void;
    StepByTransitions_Joining?(): boolean | void;
    StepByTransitions_Joined?(): boolean | void;
    StepByTransitions_Disconnected?(): boolean | void;
    StepByTransitions_TimelineOnFirst?(): boolean | void;
    StepByTransitions_TimelineOnLast?(): boolean | void;
    StepByTransitions_StepByStates?(): boolean | void;
    StepByTransitions_Any?(): boolean | void;
    StepByTransitions_StepBySteps?(): boolean | void;
    StepByTransitions_PlayStopClicked?(): boolean | void;
    StepByTransitions_TimelineScrolled?(): boolean | void;
    StepByTransitions_StepTypeChanged?(): boolean | void;
    StepByTransitions_FullSync?(): boolean | void;
    StepByTransitions_DiffSync?(): boolean | void;
    StepByTransitions_Exception?(): boolean | void;
    StepBySteps_Exception?(): boolean | void;
    StepBySteps_AutoplayOn?(): boolean | void;
    StepBySteps_Playing?(): boolean | void;
    StepBySteps_DOMReady?(): boolean | void;
    StepBySteps_Rendering?(): boolean | void;
    StepBySteps_Rendered?(): boolean | void;
    StepBySteps_InitialRenderDone?(): boolean | void;
    StepBySteps_Connecting?(): boolean | void;
    StepBySteps_Connected?(): boolean | void;
    StepBySteps_Joining?(): boolean | void;
    StepBySteps_Joined?(): boolean | void;
    StepBySteps_Disconnected?(): boolean | void;
    StepBySteps_TimelineOnFirst?(): boolean | void;
    StepBySteps_TimelineOnLast?(): boolean | void;
    StepBySteps_StepByStates?(): boolean | void;
    StepBySteps_StepByTransitions?(): boolean | void;
    StepBySteps_Any?(): boolean | void;
    StepBySteps_PlayStopClicked?(): boolean | void;
    StepBySteps_TimelineScrolled?(): boolean | void;
    StepBySteps_StepTypeChanged?(): boolean | void;
    StepBySteps_FullSync?(): boolean | void;
    StepBySteps_DiffSync?(): boolean | void;
    StepBySteps_Exception?(): boolean | void;
    PlayStopClicked_Exception?(): boolean | void;
    PlayStopClicked_AutoplayOn?(): boolean | void;
    PlayStopClicked_Playing?(): boolean | void;
    PlayStopClicked_DOMReady?(): boolean | void;
    PlayStopClicked_Rendering?(): boolean | void;
    PlayStopClicked_Rendered?(): boolean | void;
    PlayStopClicked_InitialRenderDone?(): boolean | void;
    PlayStopClicked_Connecting?(): boolean | void;
    PlayStopClicked_Connected?(): boolean | void;
    PlayStopClicked_Joining?(): boolean | void;
    PlayStopClicked_Joined?(): boolean | void;
    PlayStopClicked_Disconnected?(): boolean | void;
    PlayStopClicked_TimelineOnFirst?(): boolean | void;
    PlayStopClicked_TimelineOnLast?(): boolean | void;
    PlayStopClicked_StepByStates?(): boolean | void;
    PlayStopClicked_StepByTransitions?(): boolean | void;
    PlayStopClicked_StepBySteps?(): boolean | void;
    PlayStopClicked_Any?(): boolean | void;
    PlayStopClicked_TimelineScrolled?(): boolean | void;
    PlayStopClicked_StepTypeChanged?(): boolean | void;
    PlayStopClicked_FullSync?(): boolean | void;
    PlayStopClicked_DiffSync?(): boolean | void;
    PlayStopClicked_Exception?(): boolean | void;
    TimelineScrolled_Exception?(): boolean | void;
    TimelineScrolled_AutoplayOn?(): boolean | void;
    TimelineScrolled_Playing?(): boolean | void;
    TimelineScrolled_DOMReady?(): boolean | void;
    TimelineScrolled_Rendering?(): boolean | void;
    TimelineScrolled_Rendered?(): boolean | void;
    TimelineScrolled_InitialRenderDone?(): boolean | void;
    TimelineScrolled_Connecting?(): boolean | void;
    TimelineScrolled_Connected?(): boolean | void;
    TimelineScrolled_Joining?(): boolean | void;
    TimelineScrolled_Joined?(): boolean | void;
    TimelineScrolled_Disconnected?(): boolean | void;
    TimelineScrolled_TimelineOnFirst?(): boolean | void;
    TimelineScrolled_TimelineOnLast?(): boolean | void;
    TimelineScrolled_StepByStates?(): boolean | void;
    TimelineScrolled_StepByTransitions?(): boolean | void;
    TimelineScrolled_StepBySteps?(): boolean | void;
    TimelineScrolled_PlayStopClicked?(): boolean | void;
    TimelineScrolled_Any?(): boolean | void;
    TimelineScrolled_StepTypeChanged?(): boolean | void;
    TimelineScrolled_FullSync?(): boolean | void;
    TimelineScrolled_DiffSync?(): boolean | void;
    TimelineScrolled_Exception?(): boolean | void;
    StepTypeChanged_Exception?(): boolean | void;
    StepTypeChanged_AutoplayOn?(): boolean | void;
    StepTypeChanged_Playing?(): boolean | void;
    StepTypeChanged_DOMReady?(): boolean | void;
    StepTypeChanged_Rendering?(): boolean | void;
    StepTypeChanged_Rendered?(): boolean | void;
    StepTypeChanged_InitialRenderDone?(): boolean | void;
    StepTypeChanged_Connecting?(): boolean | void;
    StepTypeChanged_Connected?(): boolean | void;
    StepTypeChanged_Joining?(): boolean | void;
    StepTypeChanged_Joined?(): boolean | void;
    StepTypeChanged_Disconnected?(): boolean | void;
    StepTypeChanged_TimelineOnFirst?(): boolean | void;
    StepTypeChanged_TimelineOnLast?(): boolean | void;
    StepTypeChanged_StepByStates?(): boolean | void;
    StepTypeChanged_StepByTransitions?(): boolean | void;
    StepTypeChanged_StepBySteps?(): boolean | void;
    StepTypeChanged_PlayStopClicked?(): boolean | void;
    StepTypeChanged_TimelineScrolled?(): boolean | void;
    StepTypeChanged_Any?(): boolean | void;
    StepTypeChanged_FullSync?(): boolean | void;
    StepTypeChanged_DiffSync?(): boolean | void;
    StepTypeChanged_Exception?(): boolean | void;
    FullSync_Exception?(): boolean | void;
    FullSync_AutoplayOn?(): boolean | void;
    FullSync_Playing?(): boolean | void;
    FullSync_DOMReady?(): boolean | void;
    FullSync_Rendering?(): boolean | void;
    FullSync_Rendered?(): boolean | void;
    FullSync_InitialRenderDone?(): boolean | void;
    FullSync_Connecting?(): boolean | void;
    FullSync_Connected?(): boolean | void;
    FullSync_Joining?(): boolean | void;
    FullSync_Joined?(): boolean | void;
    FullSync_Disconnected?(): boolean | void;
    FullSync_TimelineOnFirst?(): boolean | void;
    FullSync_TimelineOnLast?(): boolean | void;
    FullSync_StepByStates?(): boolean | void;
    FullSync_StepByTransitions?(): boolean | void;
    FullSync_StepBySteps?(): boolean | void;
    FullSync_PlayStopClicked?(): boolean | void;
    FullSync_TimelineScrolled?(): boolean | void;
    FullSync_StepTypeChanged?(): boolean | void;
    FullSync_Any?(): boolean | void;
    FullSync_DiffSync?(): boolean | void;
    FullSync_Exception?(): boolean | void;
    DiffSync_Exception?(): boolean | void;
    DiffSync_AutoplayOn?(): boolean | void;
    DiffSync_Playing?(): boolean | void;
    DiffSync_DOMReady?(): boolean | void;
    DiffSync_Rendering?(): boolean | void;
    DiffSync_Rendered?(): boolean | void;
    DiffSync_InitialRenderDone?(): boolean | void;
    DiffSync_Connecting?(): boolean | void;
    DiffSync_Connected?(): boolean | void;
    DiffSync_Joining?(): boolean | void;
    DiffSync_Joined?(): boolean | void;
    DiffSync_Disconnected?(): boolean | void;
    DiffSync_TimelineOnFirst?(): boolean | void;
    DiffSync_TimelineOnLast?(): boolean | void;
    DiffSync_StepByStates?(): boolean | void;
    DiffSync_StepByTransitions?(): boolean | void;
    DiffSync_StepBySteps?(): boolean | void;
    DiffSync_PlayStopClicked?(): boolean | void;
    DiffSync_TimelineScrolled?(): boolean | void;
    DiffSync_StepTypeChanged?(): boolean | void;
    DiffSync_FullSync?(): boolean | void;
    DiffSync_Any?(): boolean | void;
    DiffSync_Exception?(): boolean | void;
    Exception_AutoplayOn?(): boolean | void;
    Exception_Playing?(): boolean | void;
    Exception_DOMReady?(): boolean | void;
    Exception_Rendering?(): boolean | void;
    Exception_Rendered?(): boolean | void;
    Exception_InitialRenderDone?(): boolean | void;
    Exception_Connecting?(): boolean | void;
    Exception_Connected?(): boolean | void;
    Exception_Joining?(): boolean | void;
    Exception_Joined?(): boolean | void;
    Exception_Disconnected?(): boolean | void;
    Exception_TimelineOnFirst?(): boolean | void;
    Exception_TimelineOnLast?(): boolean | void;
    Exception_StepByStates?(): boolean | void;
    Exception_StepByTransitions?(): boolean | void;
    Exception_StepBySteps?(): boolean | void;
    Exception_PlayStopClicked?(): boolean | void;
    Exception_TimelineScrolled?(): boolean | void;
    Exception_StepTypeChanged?(): boolean | void;
    Exception_FullSync?(): boolean | void;
    Exception_DiffSync?(): boolean | void;

}

/**
 * All the state names.
 */
export type TStates = 'AutoplayOn'
  | 'Playing'
  | 'DOMReady'
  | 'Rendering'
  | 'Rendered'
  | 'InitialRenderDone'
  | 'Connecting'
  | 'Connected'
  | 'Joining'
  | 'Joined'
  | 'Disconnected'
  | 'TimelineOnFirst'
  | 'TimelineOnLast'
  | 'StepByStates'
  | 'StepByTransitions'
  | 'StepBySteps'
  | 'PlayStopClicked'
  | 'TimelineScrolled'
  | 'StepTypeChanged'
  | 'FullSync'
  | 'DiffSync';

/**
 * All the transition names.
 */
export type TTransitions = 'Exception_AutoplayOn'
  | 'Exception_Playing'
  | 'Exception_DOMReady'
  | 'Exception_Rendering'
  | 'Exception_Rendered'
  | 'Exception_InitialRenderDone'
  | 'Exception_Connecting'
  | 'Exception_Connected'
  | 'Exception_Joining'
  | 'Exception_Joined'
  | 'Exception_Disconnected'
  | 'Exception_TimelineOnFirst'
  | 'Exception_TimelineOnLast'
  | 'Exception_StepByStates'
  | 'Exception_StepByTransitions'
  | 'Exception_StepBySteps'
  | 'Exception_PlayStopClicked'
  | 'Exception_TimelineScrolled'
  | 'Exception_StepTypeChanged'
  | 'Exception_FullSync'
  | 'Exception_DiffSync'
  | 'AutoplayOn_Exception'
  | 'AutoplayOn_Any'
  | 'AutoplayOn_Playing'
  | 'AutoplayOn_DOMReady'
  | 'AutoplayOn_Rendering'
  | 'AutoplayOn_Rendered'
  | 'AutoplayOn_InitialRenderDone'
  | 'AutoplayOn_Connecting'
  | 'AutoplayOn_Connected'
  | 'AutoplayOn_Joining'
  | 'AutoplayOn_Joined'
  | 'AutoplayOn_Disconnected'
  | 'AutoplayOn_TimelineOnFirst'
  | 'AutoplayOn_TimelineOnLast'
  | 'AutoplayOn_StepByStates'
  | 'AutoplayOn_StepByTransitions'
  | 'AutoplayOn_StepBySteps'
  | 'AutoplayOn_PlayStopClicked'
  | 'AutoplayOn_TimelineScrolled'
  | 'AutoplayOn_StepTypeChanged'
  | 'AutoplayOn_FullSync'
  | 'AutoplayOn_DiffSync'
  | 'AutoplayOn_Exception'
  | 'Playing_Exception'
  | 'Playing_AutoplayOn'
  | 'Playing_Any'
  | 'Playing_DOMReady'
  | 'Playing_Rendering'
  | 'Playing_Rendered'
  | 'Playing_InitialRenderDone'
  | 'Playing_Connecting'
  | 'Playing_Connected'
  | 'Playing_Joining'
  | 'Playing_Joined'
  | 'Playing_Disconnected'
  | 'Playing_TimelineOnFirst'
  | 'Playing_TimelineOnLast'
  | 'Playing_StepByStates'
  | 'Playing_StepByTransitions'
  | 'Playing_StepBySteps'
  | 'Playing_PlayStopClicked'
  | 'Playing_TimelineScrolled'
  | 'Playing_StepTypeChanged'
  | 'Playing_FullSync'
  | 'Playing_DiffSync'
  | 'Playing_Exception'
  | 'DOMReady_Exception'
  | 'DOMReady_AutoplayOn'
  | 'DOMReady_Playing'
  | 'DOMReady_Any'
  | 'DOMReady_Rendering'
  | 'DOMReady_Rendered'
  | 'DOMReady_InitialRenderDone'
  | 'DOMReady_Connecting'
  | 'DOMReady_Connected'
  | 'DOMReady_Joining'
  | 'DOMReady_Joined'
  | 'DOMReady_Disconnected'
  | 'DOMReady_TimelineOnFirst'
  | 'DOMReady_TimelineOnLast'
  | 'DOMReady_StepByStates'
  | 'DOMReady_StepByTransitions'
  | 'DOMReady_StepBySteps'
  | 'DOMReady_PlayStopClicked'
  | 'DOMReady_TimelineScrolled'
  | 'DOMReady_StepTypeChanged'
  | 'DOMReady_FullSync'
  | 'DOMReady_DiffSync'
  | 'DOMReady_Exception'
  | 'Rendering_Exception'
  | 'Rendering_AutoplayOn'
  | 'Rendering_Playing'
  | 'Rendering_DOMReady'
  | 'Rendering_Any'
  | 'Rendering_Rendered'
  | 'Rendering_InitialRenderDone'
  | 'Rendering_Connecting'
  | 'Rendering_Connected'
  | 'Rendering_Joining'
  | 'Rendering_Joined'
  | 'Rendering_Disconnected'
  | 'Rendering_TimelineOnFirst'
  | 'Rendering_TimelineOnLast'
  | 'Rendering_StepByStates'
  | 'Rendering_StepByTransitions'
  | 'Rendering_StepBySteps'
  | 'Rendering_PlayStopClicked'
  | 'Rendering_TimelineScrolled'
  | 'Rendering_StepTypeChanged'
  | 'Rendering_FullSync'
  | 'Rendering_DiffSync'
  | 'Rendering_Exception'
  | 'Rendered_Exception'
  | 'Rendered_AutoplayOn'
  | 'Rendered_Playing'
  | 'Rendered_DOMReady'
  | 'Rendered_Rendering'
  | 'Rendered_Any'
  | 'Rendered_InitialRenderDone'
  | 'Rendered_Connecting'
  | 'Rendered_Connected'
  | 'Rendered_Joining'
  | 'Rendered_Joined'
  | 'Rendered_Disconnected'
  | 'Rendered_TimelineOnFirst'
  | 'Rendered_TimelineOnLast'
  | 'Rendered_StepByStates'
  | 'Rendered_StepByTransitions'
  | 'Rendered_StepBySteps'
  | 'Rendered_PlayStopClicked'
  | 'Rendered_TimelineScrolled'
  | 'Rendered_StepTypeChanged'
  | 'Rendered_FullSync'
  | 'Rendered_DiffSync'
  | 'Rendered_Exception'
  | 'InitialRenderDone_Exception'
  | 'InitialRenderDone_AutoplayOn'
  | 'InitialRenderDone_Playing'
  | 'InitialRenderDone_DOMReady'
  | 'InitialRenderDone_Rendering'
  | 'InitialRenderDone_Rendered'
  | 'InitialRenderDone_Any'
  | 'InitialRenderDone_Connecting'
  | 'InitialRenderDone_Connected'
  | 'InitialRenderDone_Joining'
  | 'InitialRenderDone_Joined'
  | 'InitialRenderDone_Disconnected'
  | 'InitialRenderDone_TimelineOnFirst'
  | 'InitialRenderDone_TimelineOnLast'
  | 'InitialRenderDone_StepByStates'
  | 'InitialRenderDone_StepByTransitions'
  | 'InitialRenderDone_StepBySteps'
  | 'InitialRenderDone_PlayStopClicked'
  | 'InitialRenderDone_TimelineScrolled'
  | 'InitialRenderDone_StepTypeChanged'
  | 'InitialRenderDone_FullSync'
  | 'InitialRenderDone_DiffSync'
  | 'InitialRenderDone_Exception'
  | 'Connecting_Exception'
  | 'Connecting_AutoplayOn'
  | 'Connecting_Playing'
  | 'Connecting_DOMReady'
  | 'Connecting_Rendering'
  | 'Connecting_Rendered'
  | 'Connecting_InitialRenderDone'
  | 'Connecting_Any'
  | 'Connecting_Connected'
  | 'Connecting_Joining'
  | 'Connecting_Joined'
  | 'Connecting_Disconnected'
  | 'Connecting_TimelineOnFirst'
  | 'Connecting_TimelineOnLast'
  | 'Connecting_StepByStates'
  | 'Connecting_StepByTransitions'
  | 'Connecting_StepBySteps'
  | 'Connecting_PlayStopClicked'
  | 'Connecting_TimelineScrolled'
  | 'Connecting_StepTypeChanged'
  | 'Connecting_FullSync'
  | 'Connecting_DiffSync'
  | 'Connecting_Exception'
  | 'Connected_Exception'
  | 'Connected_AutoplayOn'
  | 'Connected_Playing'
  | 'Connected_DOMReady'
  | 'Connected_Rendering'
  | 'Connected_Rendered'
  | 'Connected_InitialRenderDone'
  | 'Connected_Connecting'
  | 'Connected_Any'
  | 'Connected_Joining'
  | 'Connected_Joined'
  | 'Connected_Disconnected'
  | 'Connected_TimelineOnFirst'
  | 'Connected_TimelineOnLast'
  | 'Connected_StepByStates'
  | 'Connected_StepByTransitions'
  | 'Connected_StepBySteps'
  | 'Connected_PlayStopClicked'
  | 'Connected_TimelineScrolled'
  | 'Connected_StepTypeChanged'
  | 'Connected_FullSync'
  | 'Connected_DiffSync'
  | 'Connected_Exception'
  | 'Joining_Exception'
  | 'Joining_AutoplayOn'
  | 'Joining_Playing'
  | 'Joining_DOMReady'
  | 'Joining_Rendering'
  | 'Joining_Rendered'
  | 'Joining_InitialRenderDone'
  | 'Joining_Connecting'
  | 'Joining_Connected'
  | 'Joining_Any'
  | 'Joining_Joined'
  | 'Joining_Disconnected'
  | 'Joining_TimelineOnFirst'
  | 'Joining_TimelineOnLast'
  | 'Joining_StepByStates'
  | 'Joining_StepByTransitions'
  | 'Joining_StepBySteps'
  | 'Joining_PlayStopClicked'
  | 'Joining_TimelineScrolled'
  | 'Joining_StepTypeChanged'
  | 'Joining_FullSync'
  | 'Joining_DiffSync'
  | 'Joining_Exception'
  | 'Joined_Exception'
  | 'Joined_AutoplayOn'
  | 'Joined_Playing'
  | 'Joined_DOMReady'
  | 'Joined_Rendering'
  | 'Joined_Rendered'
  | 'Joined_InitialRenderDone'
  | 'Joined_Connecting'
  | 'Joined_Connected'
  | 'Joined_Joining'
  | 'Joined_Any'
  | 'Joined_Disconnected'
  | 'Joined_TimelineOnFirst'
  | 'Joined_TimelineOnLast'
  | 'Joined_StepByStates'
  | 'Joined_StepByTransitions'
  | 'Joined_StepBySteps'
  | 'Joined_PlayStopClicked'
  | 'Joined_TimelineScrolled'
  | 'Joined_StepTypeChanged'
  | 'Joined_FullSync'
  | 'Joined_DiffSync'
  | 'Joined_Exception'
  | 'Disconnected_Exception'
  | 'Disconnected_AutoplayOn'
  | 'Disconnected_Playing'
  | 'Disconnected_DOMReady'
  | 'Disconnected_Rendering'
  | 'Disconnected_Rendered'
  | 'Disconnected_InitialRenderDone'
  | 'Disconnected_Connecting'
  | 'Disconnected_Connected'
  | 'Disconnected_Joining'
  | 'Disconnected_Joined'
  | 'Disconnected_Any'
  | 'Disconnected_TimelineOnFirst'
  | 'Disconnected_TimelineOnLast'
  | 'Disconnected_StepByStates'
  | 'Disconnected_StepByTransitions'
  | 'Disconnected_StepBySteps'
  | 'Disconnected_PlayStopClicked'
  | 'Disconnected_TimelineScrolled'
  | 'Disconnected_StepTypeChanged'
  | 'Disconnected_FullSync'
  | 'Disconnected_DiffSync'
  | 'Disconnected_Exception'
  | 'TimelineOnFirst_Exception'
  | 'TimelineOnFirst_AutoplayOn'
  | 'TimelineOnFirst_Playing'
  | 'TimelineOnFirst_DOMReady'
  | 'TimelineOnFirst_Rendering'
  | 'TimelineOnFirst_Rendered'
  | 'TimelineOnFirst_InitialRenderDone'
  | 'TimelineOnFirst_Connecting'
  | 'TimelineOnFirst_Connected'
  | 'TimelineOnFirst_Joining'
  | 'TimelineOnFirst_Joined'
  | 'TimelineOnFirst_Disconnected'
  | 'TimelineOnFirst_Any'
  | 'TimelineOnFirst_TimelineOnLast'
  | 'TimelineOnFirst_StepByStates'
  | 'TimelineOnFirst_StepByTransitions'
  | 'TimelineOnFirst_StepBySteps'
  | 'TimelineOnFirst_PlayStopClicked'
  | 'TimelineOnFirst_TimelineScrolled'
  | 'TimelineOnFirst_StepTypeChanged'
  | 'TimelineOnFirst_FullSync'
  | 'TimelineOnFirst_DiffSync'
  | 'TimelineOnFirst_Exception'
  | 'TimelineOnLast_Exception'
  | 'TimelineOnLast_AutoplayOn'
  | 'TimelineOnLast_Playing'
  | 'TimelineOnLast_DOMReady'
  | 'TimelineOnLast_Rendering'
  | 'TimelineOnLast_Rendered'
  | 'TimelineOnLast_InitialRenderDone'
  | 'TimelineOnLast_Connecting'
  | 'TimelineOnLast_Connected'
  | 'TimelineOnLast_Joining'
  | 'TimelineOnLast_Joined'
  | 'TimelineOnLast_Disconnected'
  | 'TimelineOnLast_TimelineOnFirst'
  | 'TimelineOnLast_Any'
  | 'TimelineOnLast_StepByStates'
  | 'TimelineOnLast_StepByTransitions'
  | 'TimelineOnLast_StepBySteps'
  | 'TimelineOnLast_PlayStopClicked'
  | 'TimelineOnLast_TimelineScrolled'
  | 'TimelineOnLast_StepTypeChanged'
  | 'TimelineOnLast_FullSync'
  | 'TimelineOnLast_DiffSync'
  | 'TimelineOnLast_Exception'
  | 'StepByStates_Exception'
  | 'StepByStates_AutoplayOn'
  | 'StepByStates_Playing'
  | 'StepByStates_DOMReady'
  | 'StepByStates_Rendering'
  | 'StepByStates_Rendered'
  | 'StepByStates_InitialRenderDone'
  | 'StepByStates_Connecting'
  | 'StepByStates_Connected'
  | 'StepByStates_Joining'
  | 'StepByStates_Joined'
  | 'StepByStates_Disconnected'
  | 'StepByStates_TimelineOnFirst'
  | 'StepByStates_TimelineOnLast'
  | 'StepByStates_Any'
  | 'StepByStates_StepByTransitions'
  | 'StepByStates_StepBySteps'
  | 'StepByStates_PlayStopClicked'
  | 'StepByStates_TimelineScrolled'
  | 'StepByStates_StepTypeChanged'
  | 'StepByStates_FullSync'
  | 'StepByStates_DiffSync'
  | 'StepByStates_Exception'
  | 'StepByTransitions_Exception'
  | 'StepByTransitions_AutoplayOn'
  | 'StepByTransitions_Playing'
  | 'StepByTransitions_DOMReady'
  | 'StepByTransitions_Rendering'
  | 'StepByTransitions_Rendered'
  | 'StepByTransitions_InitialRenderDone'
  | 'StepByTransitions_Connecting'
  | 'StepByTransitions_Connected'
  | 'StepByTransitions_Joining'
  | 'StepByTransitions_Joined'
  | 'StepByTransitions_Disconnected'
  | 'StepByTransitions_TimelineOnFirst'
  | 'StepByTransitions_TimelineOnLast'
  | 'StepByTransitions_StepByStates'
  | 'StepByTransitions_Any'
  | 'StepByTransitions_StepBySteps'
  | 'StepByTransitions_PlayStopClicked'
  | 'StepByTransitions_TimelineScrolled'
  | 'StepByTransitions_StepTypeChanged'
  | 'StepByTransitions_FullSync'
  | 'StepByTransitions_DiffSync'
  | 'StepByTransitions_Exception'
  | 'StepBySteps_Exception'
  | 'StepBySteps_AutoplayOn'
  | 'StepBySteps_Playing'
  | 'StepBySteps_DOMReady'
  | 'StepBySteps_Rendering'
  | 'StepBySteps_Rendered'
  | 'StepBySteps_InitialRenderDone'
  | 'StepBySteps_Connecting'
  | 'StepBySteps_Connected'
  | 'StepBySteps_Joining'
  | 'StepBySteps_Joined'
  | 'StepBySteps_Disconnected'
  | 'StepBySteps_TimelineOnFirst'
  | 'StepBySteps_TimelineOnLast'
  | 'StepBySteps_StepByStates'
  | 'StepBySteps_StepByTransitions'
  | 'StepBySteps_Any'
  | 'StepBySteps_PlayStopClicked'
  | 'StepBySteps_TimelineScrolled'
  | 'StepBySteps_StepTypeChanged'
  | 'StepBySteps_FullSync'
  | 'StepBySteps_DiffSync'
  | 'StepBySteps_Exception'
  | 'PlayStopClicked_Exception'
  | 'PlayStopClicked_AutoplayOn'
  | 'PlayStopClicked_Playing'
  | 'PlayStopClicked_DOMReady'
  | 'PlayStopClicked_Rendering'
  | 'PlayStopClicked_Rendered'
  | 'PlayStopClicked_InitialRenderDone'
  | 'PlayStopClicked_Connecting'
  | 'PlayStopClicked_Connected'
  | 'PlayStopClicked_Joining'
  | 'PlayStopClicked_Joined'
  | 'PlayStopClicked_Disconnected'
  | 'PlayStopClicked_TimelineOnFirst'
  | 'PlayStopClicked_TimelineOnLast'
  | 'PlayStopClicked_StepByStates'
  | 'PlayStopClicked_StepByTransitions'
  | 'PlayStopClicked_StepBySteps'
  | 'PlayStopClicked_Any'
  | 'PlayStopClicked_TimelineScrolled'
  | 'PlayStopClicked_StepTypeChanged'
  | 'PlayStopClicked_FullSync'
  | 'PlayStopClicked_DiffSync'
  | 'PlayStopClicked_Exception'
  | 'TimelineScrolled_Exception'
  | 'TimelineScrolled_AutoplayOn'
  | 'TimelineScrolled_Playing'
  | 'TimelineScrolled_DOMReady'
  | 'TimelineScrolled_Rendering'
  | 'TimelineScrolled_Rendered'
  | 'TimelineScrolled_InitialRenderDone'
  | 'TimelineScrolled_Connecting'
  | 'TimelineScrolled_Connected'
  | 'TimelineScrolled_Joining'
  | 'TimelineScrolled_Joined'
  | 'TimelineScrolled_Disconnected'
  | 'TimelineScrolled_TimelineOnFirst'
  | 'TimelineScrolled_TimelineOnLast'
  | 'TimelineScrolled_StepByStates'
  | 'TimelineScrolled_StepByTransitions'
  | 'TimelineScrolled_StepBySteps'
  | 'TimelineScrolled_PlayStopClicked'
  | 'TimelineScrolled_Any'
  | 'TimelineScrolled_StepTypeChanged'
  | 'TimelineScrolled_FullSync'
  | 'TimelineScrolled_DiffSync'
  | 'TimelineScrolled_Exception'
  | 'StepTypeChanged_Exception'
  | 'StepTypeChanged_AutoplayOn'
  | 'StepTypeChanged_Playing'
  | 'StepTypeChanged_DOMReady'
  | 'StepTypeChanged_Rendering'
  | 'StepTypeChanged_Rendered'
  | 'StepTypeChanged_InitialRenderDone'
  | 'StepTypeChanged_Connecting'
  | 'StepTypeChanged_Connected'
  | 'StepTypeChanged_Joining'
  | 'StepTypeChanged_Joined'
  | 'StepTypeChanged_Disconnected'
  | 'StepTypeChanged_TimelineOnFirst'
  | 'StepTypeChanged_TimelineOnLast'
  | 'StepTypeChanged_StepByStates'
  | 'StepTypeChanged_StepByTransitions'
  | 'StepTypeChanged_StepBySteps'
  | 'StepTypeChanged_PlayStopClicked'
  | 'StepTypeChanged_TimelineScrolled'
  | 'StepTypeChanged_Any'
  | 'StepTypeChanged_FullSync'
  | 'StepTypeChanged_DiffSync'
  | 'StepTypeChanged_Exception'
  | 'FullSync_Exception'
  | 'FullSync_AutoplayOn'
  | 'FullSync_Playing'
  | 'FullSync_DOMReady'
  | 'FullSync_Rendering'
  | 'FullSync_Rendered'
  | 'FullSync_InitialRenderDone'
  | 'FullSync_Connecting'
  | 'FullSync_Connected'
  | 'FullSync_Joining'
  | 'FullSync_Joined'
  | 'FullSync_Disconnected'
  | 'FullSync_TimelineOnFirst'
  | 'FullSync_TimelineOnLast'
  | 'FullSync_StepByStates'
  | 'FullSync_StepByTransitions'
  | 'FullSync_StepBySteps'
  | 'FullSync_PlayStopClicked'
  | 'FullSync_TimelineScrolled'
  | 'FullSync_StepTypeChanged'
  | 'FullSync_Any'
  | 'FullSync_DiffSync'
  | 'FullSync_Exception'
  | 'DiffSync_Exception'
  | 'DiffSync_AutoplayOn'
  | 'DiffSync_Playing'
  | 'DiffSync_DOMReady'
  | 'DiffSync_Rendering'
  | 'DiffSync_Rendered'
  | 'DiffSync_InitialRenderDone'
  | 'DiffSync_Connecting'
  | 'DiffSync_Connected'
  | 'DiffSync_Joining'
  | 'DiffSync_Joined'
  | 'DiffSync_Disconnected'
  | 'DiffSync_TimelineOnFirst'
  | 'DiffSync_TimelineOnLast'
  | 'DiffSync_StepByStates'
  | 'DiffSync_StepByTransitions'
  | 'DiffSync_StepBySteps'
  | 'DiffSync_PlayStopClicked'
  | 'DiffSync_TimelineScrolled'
  | 'DiffSync_StepTypeChanged'
  | 'DiffSync_FullSync'
  | 'DiffSync_Any'
  | 'DiffSync_Exception'
  | 'Exception_AutoplayOn'
  | 'Exception_Playing'
  | 'Exception_DOMReady'
  | 'Exception_Rendering'
  | 'Exception_Rendered'
  | 'Exception_InitialRenderDone'
  | 'Exception_Connecting'
  | 'Exception_Connected'
  | 'Exception_Joining'
  | 'Exception_Joined'
  | 'Exception_Disconnected'
  | 'Exception_TimelineOnFirst'
  | 'Exception_TimelineOnLast'
  | 'Exception_StepByStates'
  | 'Exception_StepByTransitions'
  | 'Exception_StepBySteps'
  | 'Exception_PlayStopClicked'
  | 'Exception_TimelineScrolled'
  | 'Exception_StepTypeChanged'
  | 'Exception_FullSync'
  | 'Exception_DiffSync';

/**
 * Typesafe state interface.
 */
export interface IState extends IStateBase<TStates> {}

/**
 * Subclassable typesafe state interface.
 */
export interface IStateExt<T extends string> extends IStateBase<T | TStates> {}

export interface IBind {

    // Non-params events
    (event: 'AutoplayOn_exit', listener: () => boolean | undefined, context?: Object): this;
    (event: 'AutoplayOn_end', listener: () => any, context?: Object): this;
    (event: 'Playing_exit', listener: () => boolean | undefined, context?: Object): this;
    (event: 'Playing_end', listener: () => any, context?: Object): this;
    (event: 'DOMReady_exit', listener: () => boolean | undefined, context?: Object): this;
    (event: 'DOMReady_end', listener: () => any, context?: Object): this;
    (event: 'Rendering_exit', listener: () => boolean | undefined, context?: Object): this;
    (event: 'Rendering_end', listener: () => any, context?: Object): this;
    (event: 'Rendered_exit', listener: () => boolean | undefined, context?: Object): this;
    (event: 'Rendered_end', listener: () => any, context?: Object): this;
    (event: 'InitialRenderDone_exit', listener: () => boolean | undefined, context?: Object): this;
    (event: 'InitialRenderDone_end', listener: () => any, context?: Object): this;
    (event: 'Connecting_exit', listener: () => boolean | undefined, context?: Object): this;
    (event: 'Connecting_end', listener: () => any, context?: Object): this;
    (event: 'Connected_exit', listener: () => boolean | undefined, context?: Object): this;
    (event: 'Connected_end', listener: () => any, context?: Object): this;
    (event: 'Joining_exit', listener: () => boolean | undefined, context?: Object): this;
    (event: 'Joining_end', listener: () => any, context?: Object): this;
    (event: 'Joined_exit', listener: () => boolean | undefined, context?: Object): this;
    (event: 'Joined_end', listener: () => any, context?: Object): this;
    (event: 'Disconnected_exit', listener: () => boolean | undefined, context?: Object): this;
    (event: 'Disconnected_end', listener: () => any, context?: Object): this;
    (event: 'TimelineOnFirst_exit', listener: () => boolean | undefined, context?: Object): this;
    (event: 'TimelineOnFirst_end', listener: () => any, context?: Object): this;
    (event: 'TimelineOnLast_exit', listener: () => boolean | undefined, context?: Object): this;
    (event: 'TimelineOnLast_end', listener: () => any, context?: Object): this;
    (event: 'StepByStates_exit', listener: () => boolean | undefined, context?: Object): this;
    (event: 'StepByStates_end', listener: () => any, context?: Object): this;
    (event: 'StepByTransitions_exit', listener: () => boolean | undefined, context?: Object): this;
    (event: 'StepByTransitions_end', listener: () => any, context?: Object): this;
    (event: 'StepBySteps_exit', listener: () => boolean | undefined, context?: Object): this;
    (event: 'StepBySteps_end', listener: () => any, context?: Object): this;
    (event: 'PlayStopClicked_exit', listener: () => boolean | undefined, context?: Object): this;
    (event: 'PlayStopClicked_end', listener: () => any, context?: Object): this;
    (event: 'TimelineScrolled_exit', listener: () => boolean | undefined, context?: Object): this;
    (event: 'TimelineScrolled_end', listener: () => any, context?: Object): this;
    (event: 'StepTypeChanged_exit', listener: () => boolean | undefined, context?: Object): this;
    (event: 'StepTypeChanged_end', listener: () => any, context?: Object): this;
    (event: 'FullSync_exit', listener: () => boolean | undefined, context?: Object): this;
    (event: 'FullSync_end', listener: () => any, context?: Object): this;
    (event: 'DiffSync_exit', listener: () => boolean | undefined, context?: Object): this;
    (event: 'DiffSync_end', listener: () => any, context?: Object): this;

    // Transitions
    (event: TTransitions): this;
}

export interface IEmit {
    // Non-params events
    (event: 'AutoplayOn_exit'): boolean | void;
    (event: 'AutoplayOn_end'): boolean | void;
    (event: 'Playing_exit'): boolean | void;
    (event: 'Playing_end'): boolean | void;
    (event: 'DOMReady_exit'): boolean | void;
    (event: 'DOMReady_end'): boolean | void;
    (event: 'Rendering_exit'): boolean | void;
    (event: 'Rendering_end'): boolean | void;
    (event: 'Rendered_exit'): boolean | void;
    (event: 'Rendered_end'): boolean | void;
    (event: 'InitialRenderDone_exit'): boolean | void;
    (event: 'InitialRenderDone_end'): boolean | void;
    (event: 'Connecting_exit'): boolean | void;
    (event: 'Connecting_end'): boolean | void;
    (event: 'Connected_exit'): boolean | void;
    (event: 'Connected_end'): boolean | void;
    (event: 'Joining_exit'): boolean | void;
    (event: 'Joining_end'): boolean | void;
    (event: 'Joined_exit'): boolean | void;
    (event: 'Joined_end'): boolean | void;
    (event: 'Disconnected_exit'): boolean | void;
    (event: 'Disconnected_end'): boolean | void;
    (event: 'TimelineOnFirst_exit'): boolean | void;
    (event: 'TimelineOnFirst_end'): boolean | void;
    (event: 'TimelineOnLast_exit'): boolean | void;
    (event: 'TimelineOnLast_end'): boolean | void;
    (event: 'StepByStates_exit'): boolean | void;
    (event: 'StepByStates_end'): boolean | void;
    (event: 'StepByTransitions_exit'): boolean | void;
    (event: 'StepByTransitions_end'): boolean | void;
    (event: 'StepBySteps_exit'): boolean | void;
    (event: 'StepBySteps_end'): boolean | void;
    (event: 'PlayStopClicked_exit'): boolean | void;
    (event: 'PlayStopClicked_end'): boolean | void;
    (event: 'TimelineScrolled_exit'): boolean | void;
    (event: 'TimelineScrolled_end'): boolean | void;
    (event: 'StepTypeChanged_exit'): boolean | void;
    (event: 'StepTypeChanged_end'): boolean | void;
    (event: 'FullSync_exit'): boolean | void;
    (event: 'FullSync_end'): boolean | void;
    (event: 'DiffSync_exit'): boolean | void;
    (event: 'DiffSync_end'): boolean | void;

    // Transitions
    (event: TTransitions): boolean | void;
}