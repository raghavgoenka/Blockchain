webpackHotUpdate_N_E("pages/campaigns/show",{

/***/ "./pages/campaigns/show.js":
/*!*********************************!*\
  !*** ./pages/campaigns/show.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _mnt_c_Users_ragha_Downloads_blockchain_Campaign_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _mnt_c_Users_ragha_Downloads_blockchain_Campaign_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mnt_c_Users_ragha_Downloads_blockchain_Campaign_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mnt_c_Users_ragha_Downloads_blockchain_Campaign_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mnt_c_Users_ragha_Downloads_blockchain_Campaign_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _mnt_c_Users_ragha_Downloads_blockchain_Campaign_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _mnt_c_Users_ragha_Downloads_blockchain_Campaign_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _mnt_c_Users_ragha_Downloads_blockchain_Campaign_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _mnt_c_Users_ragha_Downloads_blockchain_Campaign_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ethereum/campaign */ "./ethereum/campaign.js");








var _jsxFileName = "/mnt/c/Users/ragha/Downloads/blockchain/Campaign/pages/campaigns/show.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_mnt_c_Users_ragha_Downloads_blockchain_Campaign_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_mnt_c_Users_ragha_Downloads_blockchain_Campaign_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_mnt_c_Users_ragha_Downloads_blockchain_Campaign_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var CampaignShow = /*#__PURE__*/function (_Component) {
  Object(_mnt_c_Users_ragha_Downloads_blockchain_Campaign_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CampaignShow, _Component);

  var _super = _createSuper(CampaignShow);

  function CampaignShow() {
    Object(_mnt_c_Users_ragha_Downloads_blockchain_Campaign_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, CampaignShow);

    return _super.apply(this, arguments);
  }

  Object(_mnt_c_Users_ragha_Downloads_blockchain_Campaign_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(CampaignShow, [{
    key: "renderCards",
    value: function renderCards() {
      var _this$props = this.props,
          balance = _this$props.balance,
          minimumContribution = _this$props.minimumContribution,
          requestsCount = _this$props.requestsCount,
          approversCount = _this$props.approversCount,
          manager = _this$props.manager;
      var items = [{
        header: manager,
        meta: 'Address of Manager',
        description: 'The manager created the campaign and can create requests to  withdraw money',
        style: {
          overflowWrap: 'break-word'
        }
      }, {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description: 'YOu must contribute this mush wei to become an approver'
      }];
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Group, {
        items: items
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 16
      }, this);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
          children: "Campaign Details"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 12
        }, this), this.renderCards()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, this);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_mnt_c_Users_ragha_Downloads_blockchain_Campaign_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_mnt_c_Users_ragha_Downloads_blockchain_Campaign_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        var campaign, summary;
        return _mnt_c_Users_ragha_Downloads_blockchain_Campaign_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = Object(_ethereum_campaign__WEBPACK_IMPORTED_MODULE_11__["default"])(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt("return", {
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4]
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShow;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CampaignShow);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanMiXSwibmFtZXMiOlsiQ2FtcGFpZ25TaG93IiwicHJvcHMiLCJiYWxhbmNlIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsIm1hbmFnZXIiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwicmVuZGVyQ2FyZHMiLCJjYW1wYWlnbiIsIkNhbXBhaWduIiwicXVlcnkiLCJhZGRyZXNzIiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUdNQSxZOzs7Ozs7Ozs7Ozs7O2tDQWVXO0FBQUEsd0JBQ2dFLEtBQUtDLEtBRHJFO0FBQUEsVUFDRkMsT0FERSxlQUNGQSxPQURFO0FBQUEsVUFDTUMsbUJBRE4sZUFDTUEsbUJBRE47QUFBQSxVQUMwQkMsYUFEMUIsZUFDMEJBLGFBRDFCO0FBQUEsVUFDd0NDLGNBRHhDLGVBQ3dDQSxjQUR4QztBQUFBLFVBQ3VEQyxPQUR2RCxlQUN1REEsT0FEdkQ7QUFFVCxVQUFNQyxLQUFLLEdBQUUsQ0FDVDtBQUNBQyxjQUFNLEVBQUNGLE9BRFA7QUFFREcsWUFBSSxFQUFDLG9CQUZKO0FBR0RDLG1CQUFXLEVBQ1gsNkVBSkM7QUFLREMsYUFBSyxFQUFDO0FBQUNDLHNCQUFZLEVBQUM7QUFBZDtBQUxMLE9BRFMsRUFTVjtBQUNJSixjQUFNLEVBQUNMLG1CQURYO0FBRUlNLFlBQUksRUFBQyw0QkFGVDtBQUdJQyxtQkFBVyxFQUFDO0FBSGhCLE9BVFUsQ0FBYjtBQWlCQSwwQkFBTyxxRUFBQyxzREFBRCxDQUFNLEtBQU47QUFBWSxhQUFLLEVBQUVIO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUDtBQUNIOzs7NkJBSU87QUFDSiwwQkFDSSxxRUFBQywyREFBRDtBQUFBLGdDQUNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURDLEVBRUEsS0FBS00sV0FBTCxFQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBTUg7Ozs7NlhBNUM0QlosSzs7Ozs7O0FBQ3BCYSx3QixHQUFTQyxtRUFBUSxDQUFDZCxLQUFLLENBQUNlLEtBQU4sQ0FBWUMsT0FBYixDOzt1QkFDSEgsUUFBUSxDQUFDSSxPQUFULENBQWlCQyxVQUFqQixHQUE4QkMsSUFBOUIsRTs7O0FBQWRDLHVCO2lEQUVFO0FBQ0hsQixxQ0FBbUIsRUFBQ2tCLE9BQU8sQ0FBQyxDQUFELENBRHhCO0FBRUhuQix5QkFBTyxFQUFDbUIsT0FBTyxDQUFDLENBQUQsQ0FGWjtBQUdIakIsK0JBQWEsRUFBQ2lCLE9BQU8sQ0FBQyxDQUFELENBSGxCO0FBSUhoQixnQ0FBYyxFQUFDZ0IsT0FBTyxDQUFDLENBQUQsQ0FKbkI7QUFLSGYseUJBQU8sRUFBQ2UsT0FBTyxDQUFDLENBQUQ7QUFMWixpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQU5ZQywrQzs7QUFpRFp0QiwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1wYWlnbnMvc2hvdy5lNGFkOWJlZDU0YjVlODY3MDcwNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Q2FyZH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnOyAgIFxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JzsgICBcclxuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJztcclxuXHJcblxyXG5jbGFzcyBDYW1wYWlnblNob3cgZXh0ZW5kcyBDb21wb25lbnR7XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcyl7XHJcbiAgICAgICBjb25zdCBjYW1wYWlnbj1DYW1wYWlnbihwcm9wcy5xdWVyeS5hZGRyZXNzKTtcclxuICAgICAgIGNvbnN0IHN1bW1hcnk9YXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xyXG4gICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbjpzdW1tYXJ5WzBdLFxyXG4gICAgICAgICAgICBiYWxhbmNlOnN1bW1hcnlbMV0sXHJcbiAgICAgICAgICAgIHJlcXVlc3RzQ291bnQ6c3VtbWFyeVsyXSxcclxuICAgICAgICAgICAgYXBwcm92ZXJzQ291bnQ6c3VtbWFyeVszXSxcclxuICAgICAgICAgICAgbWFuYWdlcjpzdW1tYXJ5WzRdXHJcbiAgICB9O1xyXG5cclxuICAgIH1cclxuICAgIHJlbmRlckNhcmRzKCl7XHJcbiAgICAgICAgY29uc3Qge2JhbGFuY2UsbWluaW11bUNvbnRyaWJ1dGlvbixyZXF1ZXN0c0NvdW50LGFwcHJvdmVyc0NvdW50LG1hbmFnZXJ9PXRoaXMucHJvcHM7IFxyXG4gICAgICAgIGNvbnN0IGl0ZW1zPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyOm1hbmFnZXIsXHJcbiAgICAgICAgICAgbWV0YTonQWRkcmVzcyBvZiBNYW5hZ2VyJyxcclxuICAgICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAnVGhlIG1hbmFnZXIgY3JlYXRlZCB0aGUgY2FtcGFpZ24gYW5kIGNhbiBjcmVhdGUgcmVxdWVzdHMgdG8gIHdpdGhkcmF3IG1vbmV5JyxcclxuICAgICAgICAgICBzdHlsZTp7b3ZlcmZsb3dXcmFwOidicmVhay13b3JkJ31cclxuXHJcbiAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICBoZWFkZXI6bWluaW11bUNvbnRyaWJ1dGlvbixcclxuICAgICAgICAgICAgICAgbWV0YTonTWluaW11bSBDb250cmlidXRpb24gKHdlaSknLFxyXG4gICAgICAgICAgICAgICBkZXNjcmlwdGlvbjonWU91IG11c3QgY29udHJpYnV0ZSB0aGlzIG11c2ggd2VpIHRvIGJlY29tZSBhbiBhcHByb3ZlcicsXHJcblxyXG4gICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfS8+XHJcbiAgICB9XHJcblxyXG4gXHJcbiAgIFxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8TGF5b3V0PiAgICBcclxuICAgICAgICAgICA8aDM+Q2FtcGFpZ24gRGV0YWlsczwvaDM+XHJcbiAgICAgICAgICAge3RoaXMucmVuZGVyQ2FyZHMoKX1cclxuICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduU2hvdzsiXSwic291cmNlUm9vdCI6IiJ9