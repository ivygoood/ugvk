!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).vkBridge = t()
}(this, (function() {
    "use strict";
    var e = function(e, t) {
        return (e = function(e, t) {
            return t.get ? t.get.call(e) : t.value
        }(e, t)) && e.__esModule ? e : {
            default: e
        }
    };
    var t = {};
    !function(e) {
        e.AppClose = "VKWebAppAppClose",
        e.AppCloseStatus = "VKWebAppAppCloseStatus",
        e.AudioPause = "VKWebAppAudioPause",
        e.AudioPost = "VKWebAppAudioPost",
        e.AudioPostResult = "VKWebAppAudioPostResult",
        e.AddToHomeScreen = "VKWebAppAddToHomeScreen",
        e.AddToHomeScreenResult = "VKWebAppAddToHomeScreenResult",
        e.AddToHomeScreenInfo = "VKWebAppAddToHomeScreenInfo",
        e.AddToHomeScreenInfoResult = "VKWebAppAddToHomeScreenInfoResult",
        e.AllowNotifications = "VKWebAppAllowNotifications",
        e.AllowNotificationsResult = "VKWebAppAllowNotificationsResult",
        e.DenyNotifications = "VKWebAppDenyNotifications",
        e.DenyNotificationsResult = "VKWebAppDenyNotificationsResult",
        e.GetConfigResult = "VKWebAppGetConfigResult",
        e.GetLaunchParams = "VKWebAppGetLaunchParams",
        e.GetLaunchParamsResult = "VKWebAppGetLaunchParamsResult",
        e.GetAuthToken = "VKWebAppGetAuthToken",
        e.GetAuthTokenResult = "VKWebAppGetAuthTokenResult",
        e.GetAuthTokenStatus = "VKWebAppGetAuthTokenStatus",
        e.GetClientVersion = "VKWebAppGetClientVersion",
        e.GetClientVersionResult = "VKWebAppGetClientVersionResult",
        e.GetEmail = "VKWebAppGetEmail",
        e.GetEmailResult = "VKWebAppGetEmailResult",
        e.GetFriends = "VKWebAppGetFriends",
        e.GetFriendsResult = "VKWebAppGetFriendsResult",
        e.GetGeodescription = "VKWebAppGetGeodescription",
        e.GetGeodescriptionResult = "VKWebAppGetGeodescriptionResult",
        e.GetPersonalCard = "VKWebAppGetPersonalCard",
        e.GetPersonalCardResult = "VKWebAppGetPersonalCardResult",
        e.GetPhoneNumber = "VKWebAppGetPhoneNumber",
        e.GetPhoneNumberResult = "VKWebAppGetPhoneNumberResult",
        e.GetUserInfo = "VKWebAppGetUserInfo",
        e.GetUserInfoResult = "VKWebAppGetUserInfoResult",
        e.JoinGroup = "VKWebAppJoinGroup",
        e.JoinGroupResult = "VKWebAppJoinGroupResult",
        e.LeaveGroup = "VKWebAppLeaveGroup",
        e.LeaveGroupResult = "VKWebAppLeaveGroupResult",
        e.OpenApp = "VKWebAppOpenApp",
        e.OpenAppResult = "VKWebAppOpenAppResult",
        e.OpenCodeReader = "VKWebAppOpenCodeReader",
        e.OpenCodeReaderResult = "VKWebAppOpenCodeReaderResult",
        e.OpenContacts = "VKWebAppOpenContacts",
        e.OpenContactsResult = "VKWebAppOpenContactsResult",
        e.OpenPayForm = "VKWebAppOpenPayForm",
        e.OpenPayFormResult = "VKWebAppOpenPayFormResult",
        e.OpenQR = "VKWebAppOpenQR",
        e.OpenQRResult = "VKWebAppOpenQRResult",
        e.ResizeWindow = "VKWebAppResizeWindow",
        e.ResizeWindowResult = "VKWebAppResizeWindowResult",
        e.Scroll = "VKWebAppScroll",
        e.ScrollResult = "VKWebAppScrollResult",
        e.SetLocation = "VKWebAppSetLocation",
        e.SetLocationResult = "VKWebAppSetLocationResult",
        e.SetViewSettings = "VKWebAppSetViewSettings",
        e.SetViewSettingsResult = "VKWebAppSetViewSettingsResult",
        e.Share = "VKWebAppShare",
        e.ShareResult = "VKWebAppShareResult",
        e.ShowCommunityWidgetPreviewBox = "VKWebAppShowCommunityWidgetPreviewBox",
        e.ShowCommunityWidgetPreviewBoxResult = "VKWebAppShowCommunityWidgetPreviewBoxResult",
        e.ShowImages = "VKWebAppShowImages",
        e.ShowImagesResult = "VKWebAppShowImagesResult",
        e.ShowInviteBox = "VKWebAppShowInviteBox",
        e.ShowInviteBoxResult = "VKWebAppShowInviteBoxResult"
    }(t);

        !function(e) {
        e.ShowLeaderBoardBox = "VKWebAppShowLeaderBoardBox",
        e.ShowLeaderBoardBoxResult = "VKWebAppShowLeaderBoardBoxResult",
        e.ShowMessageBox = "VKWebAppShowMessageBox",
        e.ShowMessageBoxResult = "VKWebAppShowMessageBoxResult",
        e.ShowOrderBox = "VKWebAppShowOrderBox",
        e.ShowOrderBoxResult = "VKWebAppShowOrderBoxResult",
        e.ShowRequestBox = "VKWebAppShowRequestBox",
        e.ShowRequestBoxResult = "VKWebAppShowRequestBoxResult",
        e.ShowWallPostBox = "VKWebAppShowWallPostBox",
        e.ShowWallPostBoxResult = "VKWebAppShowWallPostBoxResult",
        e.StorageGet = "VKWebAppStorageGet",
        e.StorageGetResult = "VKWebAppStorageGetResult",
        e.StorageGetKeys = "VKWebAppStorageGetKeys",
        e.StorageGetKeysResult = "VKWebAppStorageGetKeysResult",
        e.StorageSet = "VKWebAppStorageSet",
        e.StorageSetResult = "VKWebAppStorageSetResult",
        e.TapticNotificationOccurred = "VKWebAppTapticNotificationOccurred",
        e.TapticSelectionChanged = "VKWebAppTapticSelectionChanged",
        e.TapticImpactOccurred = "VKWebAppTapticImpactOccurred",
        e.FlashGetInfo = "VKWebAppFlashGetInfo",
        e.FlashGetInfoResult = "VKWebAppFlashGetInfoResult",
        e.FlashSetLevel = "VKWebAppFlashSetLevel",
        e.FlashSetLevelResult = "VKWebAppFlashSetLevelResult",
        e.SubscribeStoryApp = "VKWebAppSubscribeStoryApp",
        e.SubscribeStoryAppResult = "VKWebAppSubscribeStoryAppResult",
        e.OpenWallPost = "VKWebAppOpenWallPost",
        e.OpenWallPostResult = "VKWebAppOpenWallPostResult",
        e.CheckPostResult = "VKWebAppCheckPostResult",
        e.GetGroupInfo = "VKWebAppGetGroupInfo",
        e.GetGroupInfoResult = "VKWebAppGetGroupInfoResult",
        e.CopyText = "VKWebAppCopyText",
        e.CopyTextResult = "VKWebAppCopyTextResult",
        e.ShowNativeAds = "VKWebAppShowNativeAds",
        e.ShowNativeAdsResult = "VKWebAppShowNativeAdsResult",
        e.CheckNativeAds = "VKWebAppCheckNativeAds",
        e.CheckNativeAdsResult = "VKWebAppCheckNativeAdsResult",
        e.Init = "VKWebAppInit",
        e.CallAPIMethod = "VKWebAppCallAPIMethod",
        e.CallAPIMethodResult = "VKWebAppCallAPIMethodResult",
        e.GetGeodata = "VKWebAppGetGeodata",
        e.GetGeodataResult = "VKWebAppGetGeodataResult",
        e.CheckPost = "VKWebAppCheckPost",
        e.SharePost = "VKWebAppSharePost",
        e.SharePostResult = "VKWebAppSharePostResult",
        e.ShowStoryBox = "VKWebAppShowStoryBox",
        e.ShowStoryBoxResult = "VKWebAppShowStoryBoxResult",
        e.ShowSubscriptionBox = "VKWebAppShowSubscriptionBox",
        e.ShowSubscriptionBoxResult = "VKWebAppShowSubscriptionBoxResult",
        e.ShowProfilePhotoBox = "VKWebAppShowProfilePhotoBox",
        e.ShowProfilePhotoBoxResult = "VKWebAppShowProfilePhotoBoxResult",
        e.DownloadFile = "VKWebAppDownloadFile",
        e.DownloadFileResult = "VKWebAppDownloadFileResult",
        e.GetAds = "VKWebAppGetAds",
        e.GetAdsResult = "VKWebAppGetAdsResult",
        e.ScrollTop = "VKWebAppScrollTop",
        e.ScrollTopResult = "VKWebAppScrollTopResult",
        e.ScrollTopStatus = "VKWebAppScrollTopStatus",
        e.ShowSlidesSheet = "VKWebAppShowSlidesSheet",
        e.ShowSlidesSheetResult = "VKWebAppShowSlidesSheetResult",
        e.TranslateText = "VKWebAppTranslateText",
        e.TranslateTextResult = "VKWebAppTranslateTextResult",
        e.Recommend = "VKWebAppRecommend",
        e.RecommendResult = "VKWebAppRecommendResult",
        e.ShowProductCard = "VKWebAppShowProductCard",
        e.ShowProductCardResult = "VKWebAppShowProductCardResult",
        e.SendPayload = "VKWebAppSendPayload",
        e.SendPayloadResult = "VKWebAppSendPayloadResult"
    }(t);
    var n = "undefined" != typeof window,
        r = n && ! !window.AndroidBridge,
        a = n && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.VKWebAppClose,
        o = n && "undefined" != typeof MessageChannel;

            function s(e) {
        var t = e.detail,
            n = t.type,
            r = t.data;
        if (n && "VKWebAppSettings" === n) {
            var a = r.frameId;
            return void 0 === a ? null : a
        }
        return null
    }
    var i = function(e) {
        var t, n, r, a, o = (t = void 0 === t ? {} : t, n = void 0 === n ? function() {} : n, r = void 0 === r ? function() {} : r, a = [], window.addEventListener("message", (function(o) {
            if (o.data && "object" == typeof o.data) {
                var s = o.data,
                    i = s.type,
                    p = s.data,
                    l = s.frameId;
                if (i && "VKWebAppSettings" === i) t.frameId = p.frameId;
                else if (i && l === t.frameId) {
                    var c = {
                        detail: {
                            type: i,
                            data: p
                        }
                    };
                    n(c), a.forEach((function(e) {
                        return e(c)
                    }))
                }
            }
        })), {
            send: function(e, n) {
                if (void 0 === n && (n = {}), r("send", e, n), t.frameId || "VKWebAppInit" === e) {
                    var a = t.frameId ? {
                        type: e,
                        data: n,
                        frameId: t.frameId
                    } : {
                        type: e,
                        data: n
                    };
                    window.parent.postMessage(a, "*")
                }
            },
            subscribe: function(e) {
                a.push(e)
            },
            unsubscribe: function(e) {
                var t = a.indexOf(e);
                t > -1 && a.splice(t, 1)
            }
        });
        return o.subscribe((function(t) {
            var n = s(t);
            null !== n && (e.frameId = n)
        })), o
    }({
        frameId: void 0
    }),
        p = r ? window.AndroidBridge : a ? window.webkit.messageHandlers : o ? i : null,
        l = 0,
        c = [];

    function u(e) {
        c.forEach((function(t) {
            return t(e)
        }))
    }
    if (n && "undefined" != typeof window && window.addEventListener && ((r || a) && window.addEventListener("VKWebAppEvent", (function(e) {
        if (e.detail && e.detail.data) {
            var t = e.detail,
                n = t.type,
                r = t.data;
            if (n && "VKWebAppSettings" === n) return;
            var a = {
                detail: {
                    type: n,
                    data: r
                }
            };
            u(a)
        }
    })), o && i.subscribe(u)), p && !p.send) {
        var d = "function" == typeof p.postMessage;
        p.send = function(e, t) {
            void 0 === t && (t = {}), r ? p[e](JSON.stringify(t)) : a ? p[e].postMessage(t) : d && p.postMessage({
                type: e,
                data: t
            }, "*")
        }
    }
    var v = {
        send: function(e, t) {
            void 0 === t && (t = {});
            var n = e;
            if ("VKWebAppInit" === e && p && p === i && (t.version = "2.14.1"), r) p.send(n, t);
            else if (a) p.send(n, t);
            else if (o && p) p.send(n, t);
            else if (p) {
                var s = p.postMessage,
                    c = "function" == typeof s;
                p.send(n, t), c && s({
                    type: n,
                    data: t
                }, "*")
            }
        },
        sendPromise: function(e, t) {
            var n = this;
            return void 0 === t && (t = {}), new Promise((function(r, a) {
                var o = ++l,
                    s = e + "Result",
                    i = e + "Failed";
                "VKWebAppCallAPIMethod" === e && (s = "VKWebAppCallAPIMethodResult", i = "VKWebAppCallAPIMethodFailed");
                var p = function(e) {
                    var a = e.detail,
                        o = a.type,
                        l = a.data;
                    if (o === s) {
                        if (!l.request_id || l.request_id === t.request_id) return n.unsubscribe(p), r(l)
                    } else if (o === i && (!l.request_id || l.request_id === t.request_id)) return n.unsubscribe(p), a(l)
                };
                n.subscribe(p), t.request_id ? n.send(e, t) : n.send(e, Object.assign(Object.assign({}, t), {
                    request_id: o
                }))
            }))
        },
        subscribe: function(e) {
            c.push(e)
        },
        unsubscribe: function(e) {
            var t = c.indexOf(e);
            t > -1 && c.splice(t, 1)
        },
        supports: function(e) {
            return ! !p && ("VKWebAppInit" === e || (r ? function(e) {
                return "function" == typeof window.AndroidBridge[e]
            }(e) : a ? function(e) {
                return !(!window.webkit.messageHandlers[e] || "function" != typeof window.webkit.messageHandlers[e].postMessage)
            }(e) : o ? function(e) {
                return "VKWebAppInit" === e || "VKWebAppGetLaunchParams" === e || "VKWebAppGetClientVersion" === e || "VKWebAppGetConfigResult" === e || "VKWebAppAddToHomeScreenInfo" === e || "VKWebAppAddToHomeScreenInfoResult" === e || "VKWebAppGetTapticSubscribers" === e || "VKWebAppGetTapticSubscribersResult" === e
            }(e) : function(e) {
                return "function" == typeof p[e] || "function" == typeof p.postMessage
            }(e)))
        },
        isWebView: function() {
            return ! !p
        },
        isIosApp: function() {
            return a
        }
    };
    return n && "undefined" != typeof window && (window.VKBridge = v, window.vkBridge = v), v.default = v, v
}));
