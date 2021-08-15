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
        description: 'You must contribute this much wei to become an approver'
      }, {
        header: re
      }];
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Group, {
        items: items
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
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
          lineNumber: 52,
          columnNumber: 12
        }, this), this.renderCards()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanMiXSwibmFtZXMiOlsiQ2FtcGFpZ25TaG93IiwicHJvcHMiLCJiYWxhbmNlIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsIm1hbmFnZXIiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwicmUiLCJyZW5kZXJDYXJkcyIsImNhbXBhaWduIiwiQ2FtcGFpZ24iLCJxdWVyeSIsImFkZHJlc3MiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBR01BLFk7Ozs7Ozs7Ozs7Ozs7a0NBZVc7QUFBQSx3QkFDZ0UsS0FBS0MsS0FEckU7QUFBQSxVQUNGQyxPQURFLGVBQ0ZBLE9BREU7QUFBQSxVQUNNQyxtQkFETixlQUNNQSxtQkFETjtBQUFBLFVBQzBCQyxhQUQxQixlQUMwQkEsYUFEMUI7QUFBQSxVQUN3Q0MsY0FEeEMsZUFDd0NBLGNBRHhDO0FBQUEsVUFDdURDLE9BRHZELGVBQ3VEQSxPQUR2RDtBQUVULFVBQU1DLEtBQUssR0FBRSxDQUNUO0FBQ0FDLGNBQU0sRUFBQ0YsT0FEUDtBQUVERyxZQUFJLEVBQUMsb0JBRko7QUFHREMsbUJBQVcsRUFDWCw2RUFKQztBQUtEQyxhQUFLLEVBQUM7QUFBQ0Msc0JBQVksRUFBQztBQUFkO0FBTEwsT0FEUyxFQVNWO0FBQ0lKLGNBQU0sRUFBQ0wsbUJBRFg7QUFFSU0sWUFBSSxFQUFDLDRCQUZUO0FBR0lDLG1CQUFXLEVBQUM7QUFIaEIsT0FUVSxFQWVWO0FBQ0lGLGNBQU0sRUFBQ0s7QUFEWCxPQWZVLENBQWI7QUFvQkEsMEJBQU8scUVBQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQVksYUFBSyxFQUFFTjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFDSDs7OzZCQUlPO0FBQ0osMEJBQ0kscUVBQUMsMkRBQUQ7QUFBQSxnQ0FDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQyxFQUVBLEtBQUtPLFdBQUwsRUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQU1IOzs7OzZYQS9DNEJiLEs7Ozs7OztBQUNwQmMsd0IsR0FBU0MsbUVBQVEsQ0FBQ2YsS0FBSyxDQUFDZ0IsS0FBTixDQUFZQyxPQUFiLEM7O3VCQUNISCxRQUFRLENBQUNJLE9BQVQsQ0FBaUJDLFVBQWpCLEdBQThCQyxJQUE5QixFOzs7QUFBZEMsdUI7aURBRUU7QUFDSG5CLHFDQUFtQixFQUFDbUIsT0FBTyxDQUFDLENBQUQsQ0FEeEI7QUFFSHBCLHlCQUFPLEVBQUNvQixPQUFPLENBQUMsQ0FBRCxDQUZaO0FBR0hsQiwrQkFBYSxFQUFDa0IsT0FBTyxDQUFDLENBQUQsQ0FIbEI7QUFJSGpCLGdDQUFjLEVBQUNpQixPQUFPLENBQUMsQ0FBRCxDQUpuQjtBQUtIaEIseUJBQU8sRUFBQ2dCLE9BQU8sQ0FBQyxDQUFEO0FBTFosaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFOWUMsK0M7O0FBb0RadkIsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL3Nob3cuNjc2ZGM3MjNlMDU4MWM5MzM0NDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0NhcmR9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JzsgICBcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7ICAgXHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi8uLi9ldGhlcmV1bS9jYW1wYWlnbic7XHJcblxyXG5cclxuY2xhc3MgQ2FtcGFpZ25TaG93IGV4dGVuZHMgQ29tcG9uZW50e1xyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpe1xyXG4gICAgICAgY29uc3QgY2FtcGFpZ249Q2FtcGFpZ24ocHJvcHMucXVlcnkuYWRkcmVzcyk7XHJcbiAgICAgICBjb25zdCBzdW1tYXJ5PWF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0U3VtbWFyeSgpLmNhbGwoKTtcclxuICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG1pbmltdW1Db250cmlidXRpb246c3VtbWFyeVswXSxcclxuICAgICAgICAgICAgYmFsYW5jZTpzdW1tYXJ5WzFdLFxyXG4gICAgICAgICAgICByZXF1ZXN0c0NvdW50OnN1bW1hcnlbMl0sXHJcbiAgICAgICAgICAgIGFwcHJvdmVyc0NvdW50OnN1bW1hcnlbM10sXHJcbiAgICAgICAgICAgIG1hbmFnZXI6c3VtbWFyeVs0XVxyXG4gICAgfTtcclxuXHJcbiAgICB9XHJcbiAgICByZW5kZXJDYXJkcygpe1xyXG4gICAgICAgIGNvbnN0IHtiYWxhbmNlLG1pbmltdW1Db250cmlidXRpb24scmVxdWVzdHNDb3VudCxhcHByb3ZlcnNDb3VudCxtYW5hZ2VyfT10aGlzLnByb3BzOyBcclxuICAgICAgICBjb25zdCBpdGVtcz0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcjptYW5hZ2VyLFxyXG4gICAgICAgICAgIG1ldGE6J0FkZHJlc3Mgb2YgTWFuYWdlcicsXHJcbiAgICAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgJ1RoZSBtYW5hZ2VyIGNyZWF0ZWQgdGhlIGNhbXBhaWduIGFuZCBjYW4gY3JlYXRlIHJlcXVlc3RzIHRvICB3aXRoZHJhdyBtb25leScsXHJcbiAgICAgICAgICAgc3R5bGU6e292ZXJmbG93V3JhcDonYnJlYWstd29yZCd9XHJcblxyXG4gICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgaGVhZGVyOm1pbmltdW1Db250cmlidXRpb24sXHJcbiAgICAgICAgICAgICAgIG1ldGE6J01pbmltdW0gQ29udHJpYnV0aW9uICh3ZWkpJyxcclxuICAgICAgICAgICAgICAgZGVzY3JpcHRpb246J1lvdSBtdXN0IGNvbnRyaWJ1dGUgdGhpcyBtdWNoIHdlaSB0byBiZWNvbWUgYW4gYXBwcm92ZXInLFxyXG5cclxuICAgICAgICAgICB9LFxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgaGVhZGVyOnJlLFxyXG4gICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfS8+XHJcbiAgICB9XHJcblxyXG4gXHJcbiAgIFxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8TGF5b3V0PiAgICBcclxuICAgICAgICAgICA8aDM+Q2FtcGFpZ24gRGV0YWlsczwvaDM+XHJcbiAgICAgICAgICAge3RoaXMucmVuZGVyQ2FyZHMoKX1cclxuICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduU2hvdzsiXSwic291cmNlUm9vdCI6IiJ9