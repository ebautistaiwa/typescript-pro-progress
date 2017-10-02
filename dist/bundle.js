var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
System.register("two", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Two;
    return {
        setters: [],
        execute: function () {
            Two = (function () {
                function Two() {
                }
                return Two;
            }());
            exports_1("Two", Two);
        }
    };
});
System.register("main", ["two"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var two_1, Main;
    return {
        setters: [
            function (two_1_1) {
                two_1 = two_1_1;
            }
        ],
        execute: function () {
            Main = (function (_super) {
                __extends(Main, _super);
                function Main() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return Main;
            }(two_1.Two));
        }
    };
});
