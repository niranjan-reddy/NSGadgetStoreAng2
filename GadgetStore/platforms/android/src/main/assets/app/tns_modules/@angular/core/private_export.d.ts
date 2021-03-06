/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Provider } from './index';
import { ANY_STATE as ANY_STATE_, DEFAULT_STATE as DEFAULT_STATE_, EMPTY_STATE as EMPTY_STATE_, FILL_STYLE_FLAG as FILL_STYLE_FLAG_ } from './src/animation/animation_constants';
import { AnimationDriver as AnimationDriver_, NoOpAnimationDriver as NoOpAnimationDriver_ } from './src/animation/animation_driver';
import { AnimationGroupPlayer as AnimationGroupPlayer_ } from './src/animation/animation_group_player';
import { AnimationKeyframe as AnimationKeyframe_ } from './src/animation/animation_keyframe';
import { AnimationPlayer as AnimationPlayer_, NoOpAnimationPlayer as NoOpAnimationPlayer_ } from './src/animation/animation_player';
import { AnimationSequencePlayer as AnimationSequencePlayer_ } from './src/animation/animation_sequence_player';
import * as animationUtils from './src/animation/animation_style_util';
import { AnimationStyles as AnimationStyles_ } from './src/animation/animation_styles';
import * as change_detection_util from './src/change_detection/change_detection_util';
import * as constants from './src/change_detection/constants';
import * as console from './src/console';
import * as debug from './src/debug/debug_renderer';
import * as provider_util from './src/di/provider_util';
import * as reflective_provider from './src/di/reflective_provider';
import * as component_factory_resolver from './src/linker/component_factory_resolver';
import * as component_resolver from './src/linker/component_resolver';
import * as debug_context from './src/linker/debug_context';
import * as element from './src/linker/element';
import * as template_ref from './src/linker/template_ref';
import * as view from './src/linker/view';
import * as view_type from './src/linker/view_type';
import * as view_utils from './src/linker/view_utils';
import * as lifecycle_hooks from './src/metadata/lifecycle_hooks';
import * as metadata_view from './src/metadata/view';
import * as wtf_init from './src/profile/wtf_init';
import * as reflection from './src/reflection/reflection';
import { Reflector } from './src/reflection/reflection';
import * as reflection_capabilities from './src/reflection/reflection_capabilities';
import * as reflector_reader from './src/reflection/reflector_reader';
import * as api from './src/render/api';
import * as security from './src/security';
import * as decorators from './src/util/decorators';
export declare namespace __core_private_types__ {
    var isDefaultChangeDetectionStrategy: typeof constants.isDefaultChangeDetectionStrategy;
    type ChangeDetectorStatus = constants.ChangeDetectorStatus;
    var ChangeDetectorStatus: typeof constants.ChangeDetectorStatus;
    var CHANGE_DETECTION_STRATEGY_VALUES: typeof constants.CHANGE_DETECTION_STRATEGY_VALUES;
    var constructDependencies: typeof reflective_provider.constructDependencies;
    type LifecycleHooks = lifecycle_hooks.LifecycleHooks;
    var LifecycleHooks: typeof lifecycle_hooks.LifecycleHooks;
    var LIFECYCLE_HOOKS_VALUES: typeof lifecycle_hooks.LIFECYCLE_HOOKS_VALUES;
    type ReflectorReader = reflector_reader.ReflectorReader;
    var ReflectorReader: typeof reflector_reader.ReflectorReader;
    var ReflectorComponentResolver: typeof component_resolver.ReflectorComponentResolver;
    var CodegenComponentFactoryResolver: typeof component_factory_resolver.CodegenComponentFactoryResolver;
    type AppElement = element.AppElement;
    var AppElement: typeof element.AppElement;
    var AppView: typeof view.AppView;
    type DebugAppView<T> = view.DebugAppView<T>;
    var DebugAppView: typeof view.DebugAppView;
    type ViewType = view_type.ViewType;
    var ViewType: typeof view_type.ViewType;
    var MAX_INTERPOLATION_VALUES: typeof view_utils.MAX_INTERPOLATION_VALUES;
    var checkBinding: typeof view_utils.checkBinding;
    var flattenNestedViewRenderNodes: typeof view_utils.flattenNestedViewRenderNodes;
    var interpolate: typeof view_utils.interpolate;
    var ViewUtils: typeof view_utils.ViewUtils;
    var VIEW_ENCAPSULATION_VALUES: typeof metadata_view.VIEW_ENCAPSULATION_VALUES;
    var DebugContext: typeof debug_context.DebugContext;
    var StaticNodeDebugInfo: typeof debug_context.StaticNodeDebugInfo;
    var devModeEqual: typeof change_detection_util.devModeEqual;
    var uninitialized: typeof change_detection_util.uninitialized;
    var ValueUnwrapper: typeof change_detection_util.ValueUnwrapper;
    type RenderDebugInfo = api.RenderDebugInfo;
    var RenderDebugInfo: typeof api.RenderDebugInfo;
    type SecurityContext = security.SecurityContext;
    var SecurityContext: typeof security.SecurityContext;
    type SanitizationService = security.SanitizationService;
    var SanitizationService: typeof security.SanitizationService;
    type TemplateRef_<C> = template_ref.TemplateRef_<C>;
    var TemplateRef_: typeof template_ref.TemplateRef_;
    var wtfInit: typeof wtf_init.wtfInit;
    type ReflectionCapabilities = reflection_capabilities.ReflectionCapabilities;
    var ReflectionCapabilities: typeof reflection_capabilities.ReflectionCapabilities;
    var makeDecorator: typeof decorators.makeDecorator;
    type DebugDomRootRenderer = debug.DebugDomRootRenderer;
    var DebugDomRootRenderer: typeof debug.DebugDomRootRenderer;
    var createProvider: typeof provider_util.createProvider;
    var isProviderLiteral: typeof provider_util.isProviderLiteral;
    var EMPTY_ARRAY: typeof view_utils.EMPTY_ARRAY;
    var EMPTY_MAP: typeof view_utils.EMPTY_MAP;
    var pureProxy1: typeof view_utils.pureProxy1;
    var pureProxy2: typeof view_utils.pureProxy2;
    var pureProxy3: typeof view_utils.pureProxy3;
    var pureProxy4: typeof view_utils.pureProxy4;
    var pureProxy5: typeof view_utils.pureProxy5;
    var pureProxy6: typeof view_utils.pureProxy6;
    var pureProxy7: typeof view_utils.pureProxy7;
    var pureProxy8: typeof view_utils.pureProxy8;
    var pureProxy9: typeof view_utils.pureProxy9;
    var pureProxy10: typeof view_utils.pureProxy10;
    var castByValue: typeof view_utils.castByValue;
    type Console = console.Console;
    var Console: typeof console.Console;
    var reflector: typeof reflection.reflector;
    type Reflector = reflection.Reflector;
    var Reflector: typeof reflection.Reflector;
    type NoOpAnimationPlayer = NoOpAnimationPlayer_;
    var NoOpAnimationPlayer: typeof NoOpAnimationPlayer_;
    type AnimationPlayer = AnimationPlayer_;
    var AnimationPlayer: typeof AnimationPlayer_;
    type NoOpAnimationDriver = NoOpAnimationDriver_;
    var NoOpAnimationDriver: typeof NoOpAnimationDriver_;
    type AnimationDriver = AnimationDriver_;
    var AnimationDriver: typeof AnimationDriver_;
    type AnimationSequencePlayer = AnimationSequencePlayer_;
    var AnimationSequencePlayer: typeof AnimationSequencePlayer_;
    type AnimationGroupPlayer = AnimationGroupPlayer_;
    var AnimationGroupPlayer: typeof AnimationGroupPlayer_;
    type AnimationKeyframe = AnimationKeyframe_;
    var AnimationKeyframe: typeof AnimationKeyframe_;
    var prepareFinalAnimationStyles: typeof animationUtils.prepareFinalAnimationStyles;
    var balanceAnimationKeyframes: typeof animationUtils.balanceAnimationKeyframes;
    var flattenStyles: typeof animationUtils.flattenStyles;
    var clearStyles: typeof animationUtils.clearStyles;
    var renderStyles: typeof animationUtils.renderStyles;
    var collectAndResolveStyles: typeof animationUtils.collectAndResolveStyles;
    type AnimationStyles = AnimationStyles_;
    var AnimationStyles: typeof AnimationStyles_;
    var ANY_STATE: typeof ANY_STATE_;
    var DEFAULT_STATE: typeof DEFAULT_STATE_;
    var EMPTY_STATE: typeof EMPTY_STATE_;
    var FILL_STYLE_FLAG: typeof FILL_STYLE_FLAG_;
}
export declare var __core_private__: {
    isDefaultChangeDetectionStrategy: (changeDetectionStrategy: constants.ChangeDetectionStrategy) => boolean;
    ChangeDetectorStatus: typeof constants.ChangeDetectorStatus;
    CHANGE_DETECTION_STRATEGY_VALUES: constants.ChangeDetectionStrategy[];
    constructDependencies: (typeOrFunc: any, dependencies: any[]) => reflective_provider.ReflectiveDependency[];
    LifecycleHooks: typeof lifecycle_hooks.LifecycleHooks;
    LIFECYCLE_HOOKS_VALUES: lifecycle_hooks.LifecycleHooks[];
    ReflectorReader: typeof reflector_reader.ReflectorReader;
    ReflectorComponentResolver: typeof component_resolver.ReflectorComponentResolver;
    CodegenComponentFactoryResolver: typeof component_factory_resolver.CodegenComponentFactoryResolver;
    AppElement: typeof element.AppElement;
    AppView: typeof view.AppView;
    DebugAppView: typeof view.DebugAppView;
    ViewType: typeof view_type.ViewType;
    MAX_INTERPOLATION_VALUES: number;
    checkBinding: (throwOnChange: boolean, oldValue: any, newValue: any) => boolean;
    flattenNestedViewRenderNodes: (nodes: any[]) => any[];
    interpolate: (valueCount: number, c0: string, a1: any, c1: string, a2?: any, c2?: string, a3?: any, c3?: string, a4?: any, c4?: string, a5?: any, c5?: string, a6?: any, c6?: string, a7?: any, c7?: string, a8?: any, c8?: string, a9?: any, c9?: string) => string;
    ViewUtils: typeof view_utils.ViewUtils;
    VIEW_ENCAPSULATION_VALUES: metadata_view.ViewEncapsulation[];
    DebugContext: typeof debug_context.DebugContext;
    StaticNodeDebugInfo: typeof debug_context.StaticNodeDebugInfo;
    devModeEqual: (a: any, b: any) => boolean;
    uninitialized: Object;
    ValueUnwrapper: typeof change_detection_util.ValueUnwrapper;
    RenderDebugInfo: typeof api.RenderDebugInfo;
    SecurityContext: typeof security.SecurityContext;
    SanitizationService: typeof security.SanitizationService;
    TemplateRef_: typeof template_ref.TemplateRef_;
    wtfInit: () => void;
    ReflectionCapabilities: typeof reflection_capabilities.ReflectionCapabilities;
    makeDecorator: (annotationCls: any, chainFn?: (fn: Function) => void) => (...args: any[]) => (cls: any) => any;
    DebugDomRootRenderer: typeof debug.DebugDomRootRenderer;
    createProvider: (obj: any) => Provider;
    isProviderLiteral: (obj: any) => boolean;
    EMPTY_ARRAY: any[];
    EMPTY_MAP: {};
    pureProxy1: <P0, R>(fn: (p0: P0) => R) => (p0: P0) => R;
    pureProxy2: <P0, P1, R>(fn: (p0: P0, p1: P1) => R) => (p0: P0, p1: P1) => R;
    pureProxy3: <P0, P1, P2, R>(fn: (p0: P0, p1: P1, p2: P2) => R) => (p0: P0, p1: P1, p2: P2) => R;
    pureProxy4: <P0, P1, P2, P3, R>(fn: (p0: P0, p1: P1, p2: P2, p3: P3) => R) => (p0: P0, p1: P1, p2: P2, p3: P3) => R;
    pureProxy5: <P0, P1, P2, P3, P4, R>(fn: (p0: P0, p1: P1, p2: P2, p3: P3, p4: P4) => R) => (p0: P0, p1: P1, p2: P2, p3: P3, p4: P4) => R;
    pureProxy6: <P0, P1, P2, P3, P4, P5, R>(fn: (p0: P0, p1: P1, p2: P2, p3: P3, p4: P4, p5: P5) => R) => (p0: P0, p1: P1, p2: P2, p3: P3, p4: P4, p5: P5) => R;
    pureProxy7: <P0, P1, P2, P3, P4, P5, P6, R>(fn: (p0: P0, p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6) => R) => (p0: P0, p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6) => R;
    pureProxy8: <P0, P1, P2, P3, P4, P5, P6, P7, R>(fn: (p0: P0, p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7) => R) => (p0: P0, p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7) => R;
    pureProxy9: <P0, P1, P2, P3, P4, P5, P6, P7, P8, R>(fn: (p0: P0, p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7, p8: P8) => R) => (p0: P0, p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7, p8: P8) => R;
    pureProxy10: <P0, P1, P2, P3, P4, P5, P6, P7, P8, P9, R>(fn: (p0: P0, p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7, p8: P8, p9: P9) => R) => (p0: P0, p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7, p8: P8, p9: P9) => R;
    castByValue: <T>(input: any, value: T) => T;
    Console: typeof console.Console;
    reflector: Reflector;
    Reflector: typeof Reflector;
    NoOpAnimationPlayer: typeof NoOpAnimationPlayer_;
    AnimationPlayer: typeof AnimationPlayer_;
    NoOpAnimationDriver: typeof NoOpAnimationDriver_;
    AnimationDriver: typeof AnimationDriver_;
    AnimationSequencePlayer: typeof AnimationSequencePlayer_;
    AnimationGroupPlayer: typeof AnimationGroupPlayer_;
    AnimationKeyframe: typeof AnimationKeyframe_;
    prepareFinalAnimationStyles: (previousStyles: {
        [key: string]: string | number;
    }, newStyles: {
        [key: string]: string | number;
    }, nullValue?: string) => {
        [key: string]: string;
    };
    balanceAnimationKeyframes: (collectedStyles: {
        [key: string]: string | number;
    }, finalStateStyles: {
        [key: string]: string | number;
    }, keyframes: any[]) => any[];
    flattenStyles: (styles: {
        [key: string]: string | number;
    }[]) => {
        [key: string]: string;
    };
    clearStyles: (styles: {
        [key: string]: string | number;
    }) => {
        [key: string]: string;
    };
    renderStyles: (element: any, renderer: any, styles: {
        [key: string]: string | number;
    }) => void;
    collectAndResolveStyles: (collection: {
        [key: string]: string | number;
    }, styles: {
        [key: string]: string | number;
    }[]) => {
        [key: string]: string | number;
    }[];
    AnimationStyles: typeof AnimationStyles_;
    ANY_STATE: string;
    DEFAULT_STATE: string;
    EMPTY_STATE: string;
    FILL_STYLE_FLAG: string;
};
