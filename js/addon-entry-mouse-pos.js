(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-mouse-pos"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/mouse-pos/style.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/mouse-pos/style.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pos-container-container {\n  display: flex;\n  align-items: center;\n  padding: 0.25rem;\n  user-select: none;\n  width: 45px;\n  justify-content: center;\n}\n\n.pos-container {\n  font-size: 0.6rem;\n  font-weight: bold;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #5cb1d6;\n  white-space: nowrap;\n}\n\n/* Use pseudo elements to avoid firing mutation observers by just moving the cursor */\n.pos-container > span::after {\n  content: attr(data-content);\n}\n\n.sa-mouse-pos-small .pos-container-container {\n  display: none !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/addons/addons/mouse-pos/_runtime_entry.js":
/*!*******************************************************!*\
  !*** ./src/addons/addons/mouse-pos/_runtime_entry.js ***!
  \*******************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/mouse-pos/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/mouse-pos/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/mouse-pos/userscript.js":
/*!***************************************************!*\
  !*** ./src/addons/addons/mouse-pos/userscript.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    global,
    console
  } = _ref;
  var posContainerContainer = document.createElement("div");
  addon.tab.displayNoneWhileDisabled(posContainerContainer, {
    display: "flex"
  });
  var posContainer = document.createElement("div");
  var pos = document.createElement("span");
  posContainerContainer.className = "pos-container-container";
  posContainer.className = "pos-container";
  posContainerContainer.appendChild(posContainer);
  posContainer.appendChild(pos);
  const vm = addon.tab.traps.vm;
  vm.runtime.ioDevices.mouse.__scratchX = vm.runtime.ioDevices.mouse._scratchX;
  vm.runtime.ioDevices.mouse.__scratchY = vm.runtime.ioDevices.mouse._scratchY;
  var x = vm.runtime.ioDevices.mouse.__scratchX ? vm.runtime.ioDevices.mouse.__scratchX : 0;
  var y = vm.runtime.ioDevices.mouse.__scratchY ? vm.runtime.ioDevices.mouse.__scratchY : 0;
  const showUpdatedValue = () => pos.setAttribute("data-content", "".concat(Math.round(x), ", ").concat(Math.round(y)));
  Object.defineProperty(vm.runtime.ioDevices.mouse, "_scratchX", {
    get: function get() {
      return this.__scratchX;
    },
    set: function set(setx) {
      x = setx;
      showUpdatedValue();
      this.__scratchX = setx;
    }
  });
  Object.defineProperty(vm.runtime.ioDevices.mouse, "_scratchY", {
    get: function get() {
      return this.__scratchY;
    },
    set: function set(sety) {
      y = sety;
      showUpdatedValue();
      this.__scratchY = sety;
    }
  });
  if (addon.tab.redux.state && addon.tab.redux.state.scratchGui.stageSize.stageSize === "small") {
    document.body.classList.add("sa-mouse-pos-small");
  }
  document.addEventListener("click", e => {
    if (e.target.closest("[class*='stage-header_stage-button-first']")) {
      document.body.classList.add("sa-mouse-pos-small");
    } else if (e.target.closest("[class*='stage-header_stage-button-last']")) {
      document.body.classList.remove("sa-mouse-pos-small");
    }
  }, {
    capture: true
  });
  while (true) {
    await addon.tab.waitForElement('[class*="controls_controls-container"]', {
      markAsSeen: true,
      reduxEvents: ["scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"]
    });
    if (addon.tab.editorMode === "editor") {
      addon.tab.appendToSharedSpace({
        space: "afterStopButton",
        element: posContainerContainer,
        order: 1
      });
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=addon-entry-mouse-pos.js.map