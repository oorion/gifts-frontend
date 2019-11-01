import styled from 'styled-components';

export const Wrapper = styled.div`
  .ace_editor {
    min-height: 150px;
  }
  .jsoneditor .search input {
    height: auto;
    border: inherit;
    border: none;
    box-shadow: none;
  }

  .jsoneditor table {
    border-collapse: collapse;
    width: auto;
  }

  .jsoneditor td,
  .jsoneditor th {
    padding: 0;
    display: table-cell;
    text-align: left;
    vertical-align: inherit;
    border-radius: inherit;
  }
  .jsoneditor {
    color: #1a1a1a;
    border: thin solid #3883fa;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: relative;
    padding: 0;
    line-height: 100%;
  }

  div.jsoneditor-field,
  div.jsoneditor-value,
  div.jsoneditor-readonly,
  div.jsoneditor-default {
    border: 1px solid transparent;
    min-height: 16px;
    min-width: 32px;
    padding: 2px;
    margin: 1px;
    word-wrap: break-word;
    float: left;
  }

  div.jsoneditor-field p,
  div.jsoneditor-value p {
    margin: 0;
  }

  div.jsoneditor-value {
    word-break: break-word;
  }

  div.jsoneditor-value.jsoneditor-empty::after {
    content: 'value';
  }

  div.jsoneditor-value.jsoneditor-string {
    color: #006000;
  }

  div.jsoneditor-value.jsoneditor-number {
    color: #ee422e;
  }

  div.jsoneditor-value.jsoneditor-boolean {
    color: #ff8c00;
  }

  div.jsoneditor-value.jsoneditor-null {
    color: #004ed0;
  }

  div.jsoneditor-value.jsoneditor-invalid {
    color: #000000;
  }

  div.jsoneditor-readonly {
    min-width: 16px;
    color: #808080;
  }

  div.jsoneditor-empty {
    border-color: #d3d3d3;
    border-style: dashed;
    border-radius: 2px;
  }

  div.jsoneditor-field.jsoneditor-empty::after {
    content: 'field';
  }

  div.jsoneditor td {
    vertical-align: top;
  }

  div.jsoneditor td.jsoneditor-separator {
    padding: 3px 0;
    vertical-align: top;
    color: #808080;
  }

  div.jsoneditor td.jsoneditor-tree {
    vertical-align: top;
  }

  div.jsoneditor div.jsoneditor-anchor {
    cursor: pointer;
  }

  div.jsoneditor div.jsoneditor-anchor .picker_wrapper.popup.popup_bottom {
    top: 28px;
    left: -10px;
  }

  div.jsoneditor.busy pre.jsoneditor-preview {
    background: #f5f5f5;
    color: #808080;
  }

  div.jsoneditor.busy div.jsoneditor-busy {
    display: inherit;
  }

  div.jsoneditor code.jsoneditor-preview {
    background: none;
  }

  div.jsoneditor.jsoneditor-mode-preview pre.jsoneditor-preview {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: auto;
    padding: 2px;
    margin: 0;
    white-space: pre-wrap;
    word-break: break-all;
  }

  div.jsoneditor-default {
    color: #808080;
    padding-left: 10px;
  }

  div.jsoneditor-tree {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: auto;
  }

  div.jsoneditor-tree button.jsoneditor-button {
    width: 24px;
    height: 24px;
    padding: 0;
    margin: 0;
    border: none;
    cursor: pointer;
    background: transparent url('img/jsoneditor-icons.svg');
  }

  div.jsoneditor-tree button.jsoneditor-button:focus {
    background-color: #f5f5f5;
    outline: #e5e5e5 solid 1px;
  }

  div.jsoneditor-tree button.jsoneditor-collapsed {
    background-position: 0 -48px;
  }

  div.jsoneditor-tree button.jsoneditor-expanded {
    background-position: 0 -72px;
  }

  div.jsoneditor-tree button.jsoneditor-contextmenu {
    background-position: -48px -72px;
  }

  div.jsoneditor-tree button.jsoneditor-invisible {
    visibility: hidden;
    background: none;
  }

  div.jsoneditor-tree button.jsoneditor-dragarea {
    background: url('img/jsoneditor-icons.svg') -72px -72px;
    cursor: move;
  }

  div.jsoneditor-tree *:focus {
    outline: none;
  }

  div.jsoneditor-tree div.jsoneditor-show-more {
    display: inline-block;
    padding: 3px 4px;
    margin: 2px 0;
    background-color: #e5e5e5;
    border-radius: 3px;
    color: #808080;
    font-family: arial, sans-serif;
    font-size: 10pt;
  }

  div.jsoneditor-tree div.jsoneditor-show-more a {
    display: inline-block;
    color: #808080;
  }

  div.jsoneditor-tree div.jsoneditor-color {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin: 4px;
    border: 1px solid #808080;
    cursor: pointer;
  }

  div.jsoneditor-tree div.jsoneditor-date {
    background: #a1a1a1;
    color: #ffffff;
    font-family: arial, sans-serif;
    border-radius: 3px;
    display: inline-block;
    padding: 3px;
    margin: 0 3px;
  }

  div.jsoneditor-tree table.jsoneditor-tree {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
  }

  div.jsoneditor-tree .jsoneditor-button.jsoneditor-schema-error {
    width: 24px;
    height: 24px;
    padding: 0;
    margin: 0 4px 0 0;
    background: url('img/jsoneditor-icons.svg') -168px -48px;
  }

  div.jsoneditor-outer {
    position: static;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  div.jsoneditor-outer.has-nav-bar {
    margin-top: -26px;
    padding-top: 26px;
  }

  div.jsoneditor-outer.has-nav-bar.has-main-menu-bar {
    margin-top: -61px;
    padding-top: 61px;
  }

  div.jsoneditor-outer.has-status-bar {
    margin-bottom: -26px;
    padding-bottom: 26px;
  }

  div.jsoneditor-outer.has-main-menu-bar {
    margin-top: -35px;
    padding-top: 35px;
  }

  div.jsoneditor-busy {
    position: absolute;
    top: 15%;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    display: none;
  }

  div.jsoneditor-busy span {
    background-color: #ffffab;
    border: 1px solid #ffee00;
    border-radius: 3px;
    padding: 5px 15px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  }

  div.jsoneditor-field.jsoneditor-empty::after,
  div.jsoneditor-value.jsoneditor-empty::after {
    pointer-events: none;
    color: #d3d3d3;
    font-size: 8pt;
  }

  div.jsoneditor-value.jsoneditor-url,
  a.jsoneditor-value.jsoneditor-url {
    color: #006000;
    text-decoration: underline;
  }

  a.jsoneditor-value.jsoneditor-url {
    display: inline-block;
    padding: 2px;
    margin: 2px;
  }

  a.jsoneditor-value.jsoneditor-url:hover,
  a.jsoneditor-value.jsoneditor-url:focus {
    color: #ee422e;
  }

  div.jsoneditor-field[contenteditable='true']:focus,
  div.jsoneditor-field[contenteditable='true']:hover,
  div.jsoneditor-value[contenteditable='true']:focus,
  div.jsoneditor-value[contenteditable='true']:hover,
  div.jsoneditor-field.jsoneditor-highlight,
  div.jsoneditor-value.jsoneditor-highlight {
    background-color: #ffffab;
    border: 1px solid #ffee00;
    border-radius: 2px;
  }

  div.jsoneditor-field.jsoneditor-highlight-active,
  div.jsoneditor-field.jsoneditor-highlight-active:focus,
  div.jsoneditor-field.jsoneditor-highlight-active:hover,
  div.jsoneditor-value.jsoneditor-highlight-active,
  div.jsoneditor-value.jsoneditor-highlight-active:focus,
  div.jsoneditor-value.jsoneditor-highlight-active:hover {
    background-color: #ffee00;
    border: 1px solid #ffc700;
    border-radius: 2px;
  }

  div.jsoneditor-value.jsoneditor-object,
  div.jsoneditor-value.jsoneditor-array {
    min-width: 16px;
  }

  div.jsoneditor-mode-view tr.jsoneditor-expandable td.jsoneditor-tree,
  div.jsoneditor-mode-form tr.jsoneditor-expandable td.jsoneditor-tree {
    cursor: pointer;
  }

  div.jsoneditor-tree button.jsoneditor-contextmenu:hover,
  div.jsoneditor-tree button.jsoneditor-contextmenu:focus,
  div.jsoneditor-tree button.jsoneditor-contextmenu.jsoneditor-selected,
  tr.jsoneditor-selected.jsoneditor-first button.jsoneditor-contextmenu {
    background-position: -48px -48px;
  }

  div.jsoneditor-tree div.jsoneditor-show-more a:hover,
  div.jsoneditor-tree div.jsoneditor-show-more a:focus {
    color: #ee422e;
  }

  textarea.jsoneditor-text,
  .ace-jsoneditor {
    min-height: 150px;
  }

  textarea.jsoneditor-text {
    width: 100%;
    height: 100%;
    margin: 0;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline-width: 0;
    border: none;
    background-color: #ffffff;
    resize: none;
  }

  tr.jsoneditor-highlight,
  tr.jsoneditor-selected {
    background-color: #d3d3d3;
  }

  tr.jsoneditor-selected button.jsoneditor-dragarea,
  tr.jsoneditor-selected button.jsoneditor-contextmenu {
    visibility: hidden;
  }

  tr.jsoneditor-selected.jsoneditor-first button.jsoneditor-dragarea,
  tr.jsoneditor-selected.jsoneditor-first button.jsoneditor-contextmenu {
    visibility: visible;
  }

  div.jsoneditor-tree button.jsoneditor-dragarea:hover,
  div.jsoneditor-tree button.jsoneditor-dragarea:focus,
  tr.jsoneditor-selected.jsoneditor-first button.jsoneditor-dragarea {
    background-position: -72px -48px;
  }

  div.jsoneditor tr,
  div.jsoneditor th,
  div.jsoneditor td {
    padding: 0;
    margin: 0;
  }

  div.jsoneditor-field,
  div.jsoneditor-value,
  div.jsoneditor td,
  div.jsoneditor th,
  div.jsoneditor textarea,
  pre.jsoneditor-preview,
  .jsoneditor-schema-error,
  .jsoneditor-popover {
    font-family: 'dejavu sans mono', 'droid sans mono', consolas, monaco,
      'lucida console', 'courier new', courier, monospace, sans-serif;
    font-size: 10pt;
    color: #1a1a1a;
  }

  .jsoneditor-schema-error {
    cursor: default;
    display: inline-block;
    height: 24px;
    line-height: 24px;
    position: relative;
    text-align: center;
    width: 24px;
  }

  .jsoneditor-popover {
    background-color: #4c4c4c;
    border-radius: 3px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
    color: #ffffff;
    padding: 7px 10px;
    position: absolute;
    cursor: auto;
    width: 200px;
    z-index: 999;
  }

  .jsoneditor-popover.jsoneditor-above {
    bottom: 32px;
    left: -98px;
  }

  .jsoneditor-popover.jsoneditor-above:before {
    border-top: 7px solid #4c4c4c;
    bottom: -7px;
  }

  .jsoneditor-popover.jsoneditor-below {
    top: 32px;
    left: -98px;
  }

  .jsoneditor-popover.jsoneditor-below:before {
    border-bottom: 7px solid #4c4c4c;
    top: -7px;
  }

  .jsoneditor-popover.jsoneditor-left {
    top: -7px;
    right: 32px;
  }

  .jsoneditor-popover.jsoneditor-left:before {
    border-left: 7px solid #4c4c4c;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    content: '';
    top: 19px;
    right: -14px;
    left: inherit;
    margin-left: inherit;
    margin-top: -7px;
    position: absolute;
  }

  .jsoneditor-popover.jsoneditor-right {
    top: -7px;
    left: 32px;
  }

  .jsoneditor-popover.jsoneditor-right:before {
    border-right: 7px solid #4c4c4c;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    content: '';
    top: 19px;
    left: -14px;
    margin-left: inherit;
    margin-top: -7px;
    position: absolute;
  }

  .jsoneditor-popover:before {
    border-right: 7px solid transparent;
    border-left: 7px solid transparent;
    content: '';
    display: block;
    left: 50%;
    margin-left: -7px;
    position: absolute;
  }

  .jsoneditor-text-errors tr.jump-to-line:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .jsoneditor-schema-error:hover .jsoneditor-popover,
  .jsoneditor-schema-error:focus .jsoneditor-popover {
    display: block;
    animation: fade-in 0.3s linear 1, move-up 0.3s linear 1;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  /* JSON schema errors displayed at the bottom of the editor in mode text and code */

  .jsoneditor .jsoneditor-validation-errors-container {
    max-height: 130px;
    overflow-y: auto;
  }

  .jsoneditor .jsoneditor-validation-errors {
    width: 100%;
    overflow: hidden;
  }

  .jsoneditor .jsoneditor-additional-errors {
    position: absolute;
    margin: auto;
    bottom: 31px;
    left: calc(50% - 92px);
    color: #808080;
    background-color: #ebebeb;
    padding: 7px 15px;
    border-radius: 8px;
  }

  .jsoneditor .jsoneditor-additional-errors.visible {
    visibility: visible;
    opacity: 1;
    transition: opacity 2s linear;
  }

  .jsoneditor .jsoneditor-additional-errors.hidden {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 2s, opacity 2s linear;
  }

  .jsoneditor .jsoneditor-text-errors {
    width: 100%;
    border-collapse: collapse;
    border-top: 1px solid #ffc700;
  }

  .jsoneditor .jsoneditor-text-errors td {
    padding: 3px 6px;
    vertical-align: middle;
  }

  .jsoneditor .jsoneditor-text-errors td pre {
    margin: 0;
    white-space: normal;
  }

  .jsoneditor .jsoneditor-text-errors tr {
    background-color: #ffffab;
  }

  .jsoneditor .jsoneditor-text-errors tr.parse-error {
    background-color: #ee2e2e70;
  }

  .jsoneditor-text-errors .jsoneditor-schema-error {
    border: none;
    width: 24px;
    height: 24px;
    padding: 0;
    margin: 0 4px 0 0;
    cursor: pointer;
  }

  .jsoneditor-text-errors tr .jsoneditor-schema-error {
    background: url('img/jsoneditor-icons.svg') -168px -48px;
  }

  .jsoneditor-text-errors tr.parse-error .jsoneditor-schema-error {
    background: url('img/jsoneditor-icons.svg') -25px 0px;
  }

  .fadein {
    -webkit-animation: fadein 0.3s;
    animation: fadein 0.3s;
    -moz-animation: fadein 0.3s;
    -o-animation: fadein 0.3s;
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  .jsoneditor-contextmenu-root {
    position: relative;
    width: 0;
    height: 0;
  }

  .jsoneditor-contextmenu {
    position: absolute;
    box-sizing: content-box;
    z-index: 99;
  }

  .jsoneditor-contextmenu .jsoneditor-menu {
    position: relative;
    left: 0;
    top: 0;
    width: 128px;
    height: auto;
    background: #ffffff;
    border: 1px solid #d3d3d3;
    box-shadow: 2px 2px 12px rgba(128, 128, 128, 0.3);
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .jsoneditor-contextmenu .jsoneditor-menu button {
    position: relative;
    padding: 0 4px 0 0;
    margin: 0;
    width: 128px;
    height: auto;
    border: none;
    cursor: pointer;
    color: #4d4d4d;
    background: transparent;
    font-size: 10pt;
    font-family: arial, sans-serif;
    box-sizing: border-box;
    text-align: left;
  }

  .jsoneditor-contextmenu .jsoneditor-menu button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  .jsoneditor-contextmenu .jsoneditor-menu button.jsoneditor-default {
    width: 96px;
  }

  .jsoneditor-contextmenu .jsoneditor-menu button.jsoneditor-expand {
    float: right;
    width: 32px;
    height: 24px;
    border-left: 1px solid #e5e5e5;
  }

  .jsoneditor-contextmenu .jsoneditor-menu li {
    overflow: hidden;
  }

  .jsoneditor-contextmenu .jsoneditor-menu li ul {
    display: none;
    position: relative;
    left: -10px;
    top: 0;
    border: none;
    box-shadow: inset 0 0 10px rgba(128, 128, 128, 0.5);
    padding: 0 10px;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }

  .jsoneditor-contextmenu .jsoneditor-menu li ul .jsoneditor-icon {
    margin-left: 24px;
  }

  .jsoneditor-contextmenu .jsoneditor-menu li ul li button {
    padding-left: 24px;
    animation: all ease-in-out 1s;
  }

  .jsoneditor-contextmenu .jsoneditor-menu li button .jsoneditor-expand {
    position: absolute;
    top: 0;
    right: 0;
    width: 24px;
    height: 24px;
    padding: 0;
    margin: 0 4px 0 0;
    background: url('img/jsoneditor-icons.svg') 0 -72px;
  }

  .jsoneditor-contextmenu .jsoneditor-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    border: none;
    padding: 0;
    margin: 0;
    background-image: url('img/jsoneditor-icons.svg');
  }

  .jsoneditor-contextmenu .jsoneditor-text {
    padding: 4px 0 4px 24px;
    word-wrap: break-word;
  }

  .jsoneditor-contextmenu .jsoneditor-text.jsoneditor-right-margin {
    padding-right: 24px;
  }

  .jsoneditor-contextmenu .jsoneditor-separator {
    height: 0;
    border-top: 1px solid #e5e5e5;
    padding-top: 5px;
    margin-top: 5px;
  }

  .jsoneditor-contextmenu button.jsoneditor-remove .jsoneditor-icon {
    background-position: -24px 0;
  }

  .jsoneditor-contextmenu button.jsoneditor-append .jsoneditor-icon {
    background-position: 0 0;
  }

  .jsoneditor-contextmenu button.jsoneditor-insert .jsoneditor-icon {
    background-position: 0 0;
  }

  .jsoneditor-contextmenu button.jsoneditor-duplicate .jsoneditor-icon {
    background-position: -48px 0;
  }

  .jsoneditor-contextmenu button.jsoneditor-sort-asc .jsoneditor-icon {
    background-position: -168px 0;
  }

  .jsoneditor-contextmenu button.jsoneditor-sort-desc .jsoneditor-icon {
    background-position: -192px 0;
  }

  .jsoneditor-contextmenu button.jsoneditor-transform .jsoneditor-icon {
    background-position: -216px 0;
  }

  .jsoneditor-contextmenu button.jsoneditor-extract .jsoneditor-icon {
    background-position: 0 -24px;
  }

  .jsoneditor-contextmenu button.jsoneditor-type-string .jsoneditor-icon {
    background-position: -144px 0;
  }

  .jsoneditor-contextmenu button.jsoneditor-type-auto .jsoneditor-icon {
    background-position: -120px 0;
  }

  .jsoneditor-contextmenu button.jsoneditor-type-object .jsoneditor-icon {
    background-position: -72px 0;
  }

  .jsoneditor-contextmenu button.jsoneditor-type-array .jsoneditor-icon {
    background-position: -96px 0;
  }

  .jsoneditor-contextmenu button.jsoneditor-type-modes .jsoneditor-icon {
    background-image: none;
    width: 6px;
  }

  .jsoneditor-contextmenu ul,
  .jsoneditor-contextmenu li {
    box-sizing: content-box;
    position: relative;
  }

  .jsoneditor-contextmenu .jsoneditor-menu button:hover,
  .jsoneditor-contextmenu .jsoneditor-menu button:focus {
    color: #1a1a1a;
    background-color: #f5f5f5;
    outline: none;
  }

  .jsoneditor-contextmenu .jsoneditor-menu li button.jsoneditor-selected,
  .jsoneditor-contextmenu .jsoneditor-menu li button.jsoneditor-selected:hover,
  .jsoneditor-contextmenu .jsoneditor-menu li button.jsoneditor-selected:focus {
    color: #ffffff;
    background-color: #ee422e;
  }

  .jsoneditor-contextmenu .jsoneditor-menu li ul li button:hover,
  .jsoneditor-contextmenu .jsoneditor-menu li ul li button:focus {
    background-color: #f5f5f5;
  }

  .jsoneditor-modal {
    max-width: 95%;
    border-radius: 2px !important;
    padding: 45px 15px 15px 15px !important;
    box-shadow: 2px 2px 12px rgba(128, 128, 128, 0.3);
    color: #4d4d4d;
    line-height: 1.3em;
  }

  .jsoneditor-modal.jsoneditor-modal-transform {
    width: 600px !important;
  }

  .jsoneditor-modal .pico-modal-header {
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
    font-family: arial, sans-serif;
    font-size: 11pt;
    background: #3883fa;
    color: #ffffff;
  }

  .jsoneditor-modal table {
    width: 100%;
  }

  .jsoneditor-modal table td {
    padding: 3px 0;
  }

  .jsoneditor-modal table td.jsoneditor-modal-input {
    text-align: right;
    padding-right: 0;
    white-space: nowrap;
  }

  .jsoneditor-modal table td.jsoneditor-modal-actions {
    padding-top: 15px;
  }

  .jsoneditor-modal table th {
    vertical-align: middle;
  }

  .jsoneditor-modal p:first-child {
    margin-top: 0;
  }

  .jsoneditor-modal a {
    color: #3883fa;
  }

  .jsoneditor-modal .jsoneditor-jmespath-block {
    margin-bottom: 10px;
  }

  .jsoneditor-modal .pico-close {
    background: none !important;
    font-size: 24px !important;
    top: 7px !important;
    right: 7px !important;
    color: #ffffff;
  }

  .jsoneditor-modal input {
    padding: 4px;
  }

  .jsoneditor-modal input[type='text'] {
    cursor: inherit;
  }

  .jsoneditor-modal input[disabled] {
    background: #d3d3d3;
    color: #808080;
  }

  .jsoneditor-modal .jsoneditor-select-wrapper {
    position: relative;
    display: inline-block;
  }

  .jsoneditor-modal .jsoneditor-select-wrapper:after {
    content: '';
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid #666;
    position: absolute;
    right: 8px;
    top: 14px;
    pointer-events: none;
  }

  .jsoneditor-modal select {
    padding: 3px 24px 3px 10px;
    min-width: 180px;
    max-width: 350px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    text-indent: 0;
    text-overflow: '';
    font-size: 10pt;
    line-height: 1.5em;
  }

  .jsoneditor-modal select::-ms-expand {
    display: none;
  }

  .jsoneditor-modal .jsoneditor-button-group input {
    padding: 4px 10px;
    margin: 0;
    border-radius: 0;
    border-left-style: none;
  }

  .jsoneditor-modal .jsoneditor-button-group input.jsoneditor-button-first {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border-left-style: solid;
  }

  .jsoneditor-modal .jsoneditor-button-group input.jsoneditor-button-last {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  .jsoneditor-modal .jsoneditor-transform-preview {
    background: #f5f5f5;
    height: 200px;
  }

  .jsoneditor-modal .jsoneditor-transform-preview.jsoneditor-error {
    color: #ee422e;
  }

  .jsoneditor-modal .jsoneditor-jmespath-wizard {
    line-height: 1.2em;
    width: 100%;
    padding: 0;
    border-radius: 3px;
  }

  .jsoneditor-modal .jsoneditor-jmespath-label {
    font-weight: bold;
    color: dodgerblue;
    margin-top: 20px;
    margin-bottom: 5px;
  }

  .jsoneditor-modal .jsoneditor-jmespath-wizard-table {
    width: 100%;
    border-collapse: collapse;
  }

  .jsoneditor-modal .jsoneditor-jmespath-wizard-label {
    font-style: italic;
    margin: 4px 0 2px 0;
  }

  .jsoneditor-modal .jsoneditor-inline {
    position: relative;
    display: inline-block;
    width: 100%;
    padding-top: 2px;
    padding-bottom: 2px;
  }

  .jsoneditor-modal .jsoneditor-inline:not(:last-child) {
    padding-right: 2px;
  }

  .jsoneditor-modal .jsoneditor-jmespath-filter {
    display: flex;
    flex-wrap: wrap;
  }

  .jsoneditor-modal .jsoneditor-jmespath-filter-field {
    width: 180px;
  }

  .jsoneditor-modal .jsoneditor-jmespath-filter-relation {
    width: 100px;
  }

  .jsoneditor-modal .jsoneditor-jmespath-filter-value {
    min-width: 180px;
    flex: 1;
  }

  .jsoneditor-modal .jsoneditor-jmespath-sort-field {
    width: 170px;
  }

  .jsoneditor-modal .jsoneditor-jmespath-sort-order {
    width: 150px;
  }

  .jsoneditor-modal .jsoneditor-jmespath-select-fields {
    width: 100%;
  }

  .jsoneditor-modal .selectr-selected {
    border-color: #d3d3d3;
    padding: 4px 28px 4px 8px;
  }

  .jsoneditor-modal .selectr-selected .selectr-tag {
    background-color: #3883fa;
    border-radius: 5px;
  }

  .jsoneditor-modal table th,
  .jsoneditor-modal table td {
    text-align: left;
    vertical-align: middle;
    font-weight: normal;
    color: #4d4d4d;
    border-spacing: 0;
    border-collapse: collapse;
  }

  .jsoneditor-modal select,
  .jsoneditor-modal textarea,
  .jsoneditor-modal input,
  .jsoneditor-modal #query {
    background: #ffffff;
    border: 1px solid #d3d3d3;
    color: #4d4d4d;
    border-radius: 3px;
    padding: 4px;
  }

  .jsoneditor-modal,
  .jsoneditor-modal table td,
  .jsoneditor-modal table th,
  .jsoneditor-modal select,
  .jsoneditor-modal option,
  .jsoneditor-modal textarea,
  .jsoneditor-modal input,
  .jsoneditor-modal #query {
    font-size: 10.5pt;
    font-family: arial, sans-serif;
  }

  .jsoneditor-modal #query,
  .jsoneditor-modal .jsoneditor-transform-preview {
    font-family: 'dejavu sans mono', 'droid sans mono', consolas, monaco,
      'lucida console', 'courier new', courier, monospace, sans-serif;
    font-size: 10pt;
    width: 100%;
    box-sizing: border-box;
  }

  .jsoneditor-modal input[type='button'],
  .jsoneditor-modal input[type='submit'] {
    background: #f5f5f5;
    padding: 4px 20px;
  }

  .jsoneditor-modal select,
  .jsoneditor-modal input {
    cursor: pointer;
  }

  .jsoneditor-modal
    .jsoneditor-button-group.jsoneditor-button-group-value-asc
    input.jsoneditor-button-asc,
  .jsoneditor-modal
    .jsoneditor-button-group.jsoneditor-button-group-value-desc
    input.jsoneditor-button-desc {
    background: #3883fa;
    border-color: #3883fa;
    color: #ffffff;
  }
  .jsoneditor-menu {
    width: 100%;
    height: 35px;
    padding: 2px;
    margin: 0;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #ffffff;
    background-color: #3883fa;
    border-bottom: 1px solid #3883fa;
  }

  .jsoneditor-menu > button,
  .jsoneditor-menu > .jsoneditor-modes > button {
    width: 26px;
    height: 26px;
    margin: 2px;
    padding: 0;
    border-radius: 2px;
    border: 1px solid transparent;
    background: transparent url('img/jsoneditor-icons.svg');
    color: #ffffff;
    opacity: 0.8;
    font-family: arial, sans-serif;
    font-size: 10pt;
    float: left;
  }

  .jsoneditor-menu > button:hover,
  .jsoneditor-menu > .jsoneditor-modes > button:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.4);
  }

  .jsoneditor-menu > button:focus,
  .jsoneditor-menu > button:active,
  .jsoneditor-menu > .jsoneditor-modes > button:focus,
  .jsoneditor-menu > .jsoneditor-modes > button:active {
    background-color: rgba(255, 255, 255, 0.3);
  }

  .jsoneditor-menu > button:disabled,
  .jsoneditor-menu > .jsoneditor-modes > button:disabled {
    opacity: 0.5;
    background-color: transparent;
    border: none;
  }

  .jsoneditor-menu > button.jsoneditor-collapse-all {
    background-position: 0 -96px;
  }

  .jsoneditor-menu > button.jsoneditor-expand-all {
    background-position: 0 -120px;
  }

  .jsoneditor-menu > button.jsoneditor-sort {
    background-position: -120px -96px;
  }

  .jsoneditor-menu > button.jsoneditor-transform {
    background-position: -144px -96px;
  }

  .jsoneditor.jsoneditor-mode-view > .jsoneditor-menu > button.jsoneditor-sort,
  .jsoneditor.jsoneditor-mode-form > .jsoneditor-menu > button.jsoneditor-sort,
  .jsoneditor.jsoneditor-mode-view
    > .jsoneditor-menu
    > button.jsoneditor-transform,
  .jsoneditor.jsoneditor-mode-form
    > .jsoneditor-menu
    > button.jsoneditor-transform {
    display: none;
  }

  .jsoneditor-menu > button.jsoneditor-undo {
    background-position: -24px -96px;
  }

  .jsoneditor-menu > button.jsoneditor-undo:disabled {
    background-position: -24px -120px;
  }

  .jsoneditor-menu > button.jsoneditor-redo {
    background-position: -48px -96px;
  }

  .jsoneditor-menu > button.jsoneditor-redo:disabled {
    background-position: -48px -120px;
  }

  .jsoneditor-menu > button.jsoneditor-compact {
    background-position: -72px -96px;
  }

  .jsoneditor-menu > button.jsoneditor-format {
    background-position: -72px -120px;
  }

  .jsoneditor-menu > button.jsoneditor-repair {
    background-position: -96px -96px;
  }

  .jsoneditor-menu > .jsoneditor-modes {
    display: block;
    float: left;
  }

  .jsoneditor-menu > .jsoneditor-modes > button {
    background-image: none;
    width: auto;
    padding-left: 6px;
    padding-right: 6px;
  }

  .jsoneditor-menu > button.jsoneditor-separator,
  .jsoneditor-menu > .jsoneditor-modes > button.jsoneditor-separator {
    margin-left: 10px;
  }

  .jsoneditor-menu a {
    font-family: arial, sans-serif;
    font-size: 10pt;
    color: #ffffff;
    opacity: 0.8;
    vertical-align: middle;
  }

  .jsoneditor-menu a:hover {
    opacity: 1;
  }

  .jsoneditor-menu a.jsoneditor-poweredBy {
    font-size: 8pt;
    position: absolute;
    right: 0;
    top: 0;
    padding: 10px;
  }
  .jsoneditor-search {
    font-family: arial, sans-serif;
    position: absolute;
    right: 4px;
    top: 4px;
    border-collapse: collapse;
    border-spacing: 0;
    display: flex;
  }

  .jsoneditor-search input {
    color: #1a1a1a;
    width: 120px;
    border: none;
    outline: none;
    margin: 1px;
    line-height: 20px;
  }

  .jsoneditor-search button {
    width: 16px;
    height: 24px;
    padding: 0;
    margin: 0;
    border: none;
    background: url('img/jsoneditor-icons.svg');
    vertical-align: top;
  }

  .jsoneditor-search button:hover {
    background-color: transparent;
  }

  .jsoneditor-search button.jsoneditor-refresh {
    width: 18px;
    background-position: -99px -73px;
  }

  .jsoneditor-search button.jsoneditor-next {
    cursor: pointer;
    background-position: -124px -73px;
  }

  .jsoneditor-search button.jsoneditor-next:hover {
    background-position: -124px -49px;
  }

  .jsoneditor-search button.jsoneditor-previous {
    cursor: pointer;
    background-position: -148px -73px;
    margin-right: 2px;
  }

  .jsoneditor-search button.jsoneditor-previous:hover {
    background-position: -148px -49px;
  }

  .jsoneditor-results {
    font-family: arial, sans-serif;
    color: #ffffff;
    padding-right: 5px;
    line-height: 26px;
  }

  .jsoneditor-frame {
    border: 1px solid transparent;
    background-color: #ffffff;
    padding: 0 2px;
    margin: 0;
  }
  .jsoneditor .autocomplete.dropdown {
    position: absolute;
    background: #ffffff;
    box-shadow: 2px 2px 12px rgba(128, 128, 128, 0.3);
    border: 1px solid #d3d3d3;
    z-index: 100;
    overflow-x: hidden;
    overflow-y: auto;
    cursor: default;
    margin: 0;
    padding: 5px;
    text-align: left;
    outline: 0;
    font-family: 'dejavu sans mono', 'droid sans mono', consolas, monaco,
      'lucida console', 'courier new', courier, monospace, sans-serif;
    font-size: 10pt;
  }

  .jsoneditor .autocomplete.dropdown .item {
    color: #333;
  }

  .jsoneditor .autocomplete.dropdown .item.hover {
    background-color: #ddd;
  }

  .jsoneditor .autocomplete.hint {
    color: #aaa;
    top: 4px;
    left: 4px;
  }
  .jsoneditor-treepath {
    padding: 0 5px;
    overflow: hidden;
    white-space: nowrap;
    outline: none;
  }

  .jsoneditor-treepath.show-all {
    word-wrap: break-word;
    white-space: normal;
    position: absolute;
    background-color: #ebebeb;
    z-index: 999;
    box-shadow: 2px 2px 12px rgba(128, 128, 128, 0.3);
  }

  .jsoneditor-treepath.show-all span.jsoneditor-treepath-show-all-btn {
    display: none;
  }

  .jsoneditor-treepath div.jsoneditor-contextmenu-root {
    position: absolute;
    left: 0;
  }

  .jsoneditor-treepath .jsoneditor-treepath-show-all-btn {
    position: absolute;
    background-color: #ebebeb;
    left: 0;
    height: 20px;
    padding: 0 3px;
    cursor: pointer;
  }

  .jsoneditor-treepath .jsoneditor-treepath-element {
    margin: 1px;
    font-family: arial, sans-serif;
    font-size: 10pt;
  }

  .jsoneditor-treepath .jsoneditor-treepath-seperator {
    margin: 2px;
    font-size: 9pt;
    font-family: arial, sans-serif;
  }

  .jsoneditor-treepath span.jsoneditor-treepath-element:hover,
  .jsoneditor-treepath span.jsoneditor-treepath-seperator:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  .jsoneditor-statusbar {
    line-height: 26px;
    height: 26px;
    color: #808080;
    background-color: #ebebeb;
    border-top: 1px solid #d3d3d3;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 10pt;
  }

  .jsoneditor-statusbar > .jsoneditor-curserinfo-val {
    margin-right: 12px;
  }

  .jsoneditor-statusbar > .jsoneditor-curserinfo-count {
    margin-left: 4px;
  }

  .jsoneditor-statusbar > .jsoneditor-validation-error-icon {
    float: right;
    width: 24px;
    height: 24px;
    padding: 0;
    margin-top: 1px;
    background: url('img/jsoneditor-icons.svg') -168px -48px;
    cursor: pointer;
  }

  .jsoneditor-statusbar > .jsoneditor-validation-error-count {
    float: right;
    margin: 0 4px 0 0;
    cursor: pointer;
  }

  .jsoneditor-statusbar > .jsoneditor-parse-error-icon {
    float: right;
    width: 24px;
    height: 24px;
    padding: 0;
    margin: 1px;
    background: url('img/jsoneditor-icons.svg') -25px 0px;
  }

  .jsoneditor-statusbar .jsoneditor-array-info a {
    color: inherit;
  }

  div.jsoneditor-statusbar > .jsoneditor-curserinfo-label,
  div.jsoneditor-statusbar > .jsoneditor-size-info {
    margin: 0 4px;
  }
  .jsoneditor-navigation-bar {
    width: 100%;
    height: 26px;
    line-height: 26px;
    padding: 0;
    margin: 0;
    border-bottom: 1px solid #d3d3d3;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #808080;
    background-color: #ebebeb;
    overflow: hidden;
    font-family: arial, sans-serif;
    font-size: 10pt;
  }
  /*!
 * Selectr 2.4.0
 * https://github.com/Mobius1/Selectr
 *
 * Released under the MIT license
 */

  .selectr-container {
    position: relative;
  }

  .selectr-container li {
    list-style: none;
  }

  .selectr-hidden {
    position: absolute;
    overflow: hidden;
    clip: rect(0px, 0px, 0px, 0px);
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0 none;
  }

  .selectr-visible {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 11;
  }

  .selectr-desktop.multiple .selectr-visible {
    display: none;
  }

  .selectr-desktop.multiple.native-open .selectr-visible {
    top: 100%;
    min-height: 200px !important;
    height: auto;
    opacity: 1;
    display: block;
  }

  .selectr-container.multiple.selectr-mobile .selectr-selected {
    z-index: 0;
  }

  .selectr-selected {
    position: relative;
    z-index: 1;
    box-sizing: border-box;
    width: 100%;
    padding: 7px 28px 7px 14px;
    cursor: pointer;
    border: 1px solid #999999;
    border-radius: 3px;
    background-color: #ffffff;
  }

  .selectr-selected::before {
    position: absolute;
    top: 50%;
    right: 10px;
    width: 0;
    height: 0;
    content: '';
    -o-transform: rotate(0deg) translate3d(0px, -50%, 0px);
    -ms-transform: rotate(0deg) translate3d(0px, -50%, 0px);
    -moz-transform: rotate(0deg) translate3d(0px, -50%, 0px);
    -webkit-transform: rotate(0deg) translate3d(0px, -50%, 0px);
    transform: rotate(0deg) translate3d(0px, -50%, 0px);
    border-width: 4px 4px 0 4px;
    border-style: solid;
    border-color: #6c7a86 transparent transparent;
  }

  .selectr-container.open .selectr-selected::before,
  .selectr-container.native-open .selectr-selected::before {
    border-width: 0 4px 4px 4px;
    border-style: solid;
    border-color: transparent transparent #6c7a86;
  }

  .selectr-label {
    display: none;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .selectr-placeholder {
    color: #6c7a86;
  }

  .selectr-tags {
    margin: 0;
    padding: 0;
    white-space: normal;
  }

  .has-selected .selectr-tags {
    margin: 0 0 -2px;
  }

  .selectr-tag {
    list-style: none;
    position: relative;
    float: left;
    padding: 2px 25px 2px 8px;
    margin: 0 2px 2px 0;
    cursor: default;
    color: #ffffff;
    border: medium none;
    border-radius: 10px;
    background: #acb7bf none repeat scroll 0 0;
  }

  .selectr-container.multiple.has-selected .selectr-selected {
    padding: 5px 28px 5px 5px;
  }

  .selectr-options-container {
    position: absolute;
    z-index: 10000;
    top: calc(100% - 1px);
    left: 0;
    display: none;
    box-sizing: border-box;
    width: 100%;
    border-width: 0 1px 1px;
    border-style: solid;
    border-color: transparent #999999 #999999;
    border-radius: 0 0 3px 3px;
    background-color: #ffffff;
  }

  .selectr-container.open .selectr-options-container {
    display: block;
  }

  .selectr-input-container {
    position: relative;
    display: none;
  }

  .selectr-clear,
  .selectr-input-clear,
  .selectr-tag-remove {
    position: absolute;
    top: 50%;
    right: 22px;
    width: 20px;
    height: 20px;
    padding: 0;
    cursor: pointer;
    -o-transform: translate3d(0px, -50%, 0px);
    -ms-transform: translate3d(0px, -50%, 0px);
    -moz-transform: translate3d(0px, -50%, 0px);
    -webkit-transform: translate3d(0px, -50%, 0px);
    transform: translate3d(0px, -50%, 0px);
    border: medium none;
    background-color: transparent;
    z-index: 11;
  }

  .selectr-clear,
  .selectr-input-clear {
    display: none;
  }

  .selectr-container.has-selected .selectr-clear,
  .selectr-input-container.active .selectr-input-clear {
    display: block;
  }

  .selectr-selected .selectr-tag-remove {
    right: 2px;
  }

  .selectr-clear::before,
  .selectr-clear::after,
  .selectr-input-clear::before,
  .selectr-input-clear::after,
  .selectr-tag-remove::before,
  .selectr-tag-remove::after {
    position: absolute;
    top: 5px;
    left: 9px;
    width: 2px;
    height: 10px;
    content: ' ';
    background-color: #6c7a86;
  }

  .selectr-tag-remove::before,
  .selectr-tag-remove::after {
    top: 4px;
    width: 3px;
    height: 12px;
    background-color: #ffffff;
  }

  .selectr-clear:before,
  .selectr-input-clear::before,
  .selectr-tag-remove::before {
    -o-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .selectr-clear:after,
  .selectr-input-clear::after,
  .selectr-tag-remove::after {
    -o-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .selectr-input-container.active,
  .selectr-input-container.active .selectr-clear {
    display: block;
  }

  .selectr-input {
    top: 5px;
    left: 5px;
    box-sizing: border-box;
    width: calc(100% - 30px);
    margin: 10px 15px;
    padding: 7px 30px 7px 9px;
    border: 1px solid #999999;
    border-radius: 3px;
  }

  .selectr-notice {
    display: none;
    box-sizing: border-box;
    width: 100%;
    padding: 8px 16px;
    border-top: 1px solid #999999;
    border-radius: 0 0 3px 3px;
    background-color: #ffffff;
  }

  .selectr-container.notice .selectr-notice {
    display: block;
  }

  .selectr-container.notice .selectr-selected {
    border-radius: 3px 3px 0 0;
  }

  .selectr-options {
    position: relative;
    top: calc(100% + 2px);
    display: none;
    overflow-x: auto;
    overflow-y: scroll;
    max-height: 200px;
    margin: 0;
    padding: 0;
  }

  .selectr-container.open .selectr-options,
  .selectr-container.open .selectr-input-container,
  .selectr-container.notice .selectr-options-container {
    display: block;
  }

  .selectr-option {
    position: relative;
    display: block;
    padding: 5px 20px;
    list-style: outside none none;
    cursor: pointer;
    font-weight: normal;
  }

  .selectr-options.optgroups > .selectr-option {
    padding-left: 25px;
  }

  .selectr-optgroup {
    font-weight: bold;
    padding: 0;
  }

  .selectr-optgroup--label {
    font-weight: bold;
    margin-top: 10px;
    padding: 5px 15px;
  }

  .selectr-match {
    text-decoration: underline;
  }

  .selectr-option.selected {
    background-color: #ddd;
  }

  .selectr-option.active {
    color: #ffffff;
    background-color: #5897fb;
  }

  .selectr-option.disabled {
    opacity: 0.4;
  }

  .selectr-option.excluded {
    display: none;
  }

  .selectr-container.open .selectr-selected {
    border-color: #999999 #999999 transparent #999999;
    border-radius: 3px 3px 0 0;
  }

  .selectr-container.open .selectr-selected::after {
    -o-transform: rotate(180deg) translate3d(0px, 50%, 0px);
    -ms-transform: rotate(180deg) translate3d(0px, 50%, 0px);
    -moz-transform: rotate(180deg) translate3d(0px, 50%, 0px);
    -webkit-transform: rotate(180deg) translate3d(0px, 50%, 0px);
    transform: rotate(180deg) translate3d(0px, 50%, 0px);
  }

  .selectr-disabled {
    opacity: 0.6;
  }

  .selectr-empty,
  .has-selected .selectr-placeholder {
    display: none;
  }

  .has-selected .selectr-label {
    display: block;
  }

  /* TAGGABLE */

  .taggable .selectr-selected {
    padding: 4px 28px 4px 4px;
  }

  .taggable .selectr-selected::after {
    display: table;
    content: ' ';
    clear: both;
  }

  .taggable .selectr-label {
    width: auto;
  }

  .taggable .selectr-tags {
    float: left;
    display: block;
  }

  .taggable .selectr-placeholder {
    display: none;
  }

  .input-tag {
    float: left;
    min-width: 90px;
    width: auto;
  }

  .selectr-tag-input {
    border: medium none;
    padding: 3px 10px;
    width: 100%;
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
  }

  .selectr-input-container.loading::after {
    position: absolute;
    top: 50%;
    right: 20px;
    width: 20px;
    height: 20px;
    content: '';
    -o-transform: translate3d(0px, -50%, 0px);
    -ms-transform: translate3d(0px, -50%, 0px);
    -moz-transform: translate3d(0px, -50%, 0px);
    -webkit-transform: translate3d(0px, -50%, 0px);
    transform: translate3d(0px, -50%, 0px);
    -o-transform-origin: 50% 0 0;
    -ms-transform-origin: 50% 0 0;
    -moz-transform-origin: 50% 0 0;
    -webkit-transform-origin: 50% 0 0;
    transform-origin: 50% 0 0;
    -moz-animation: 500ms linear 0s normal forwards infinite running spin;
    -webkit-animation: 500ms linear 0s normal forwards infinite running spin;
    animation: 500ms linear 0s normal forwards infinite running spin;
    border-width: 3px;
    border-style: solid;
    border-color: #aaa #ddd #ddd;
    border-radius: 50%;
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg) translate3d(0px, -50%, 0px);
      transform: rotate(0deg) translate3d(0px, -50%, 0px);
    }

    100% {
      -webkit-transform: rotate(360deg) translate3d(0px, -50%, 0px);
      transform: rotate(360deg) translate3d(0px, -50%, 0px);
    }
  }

  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg) translate3d(0px, -50%, 0px);
      transform: rotate(0deg) translate3d(0px, -50%, 0px);
    }

    100% {
      -webkit-transform: rotate(360deg) translate3d(0px, -50%, 0px);
      transform: rotate(360deg) translate3d(0px, -50%, 0px);
    }
  }

  .selectr-container.open.inverted .selectr-selected {
    border-color: transparent #999999 #999999;
    border-radius: 0 0 3px 3px;
  }

  .selectr-container.inverted .selectr-options-container {
    border-width: 1px 1px 0;
    border-color: #999999 #999999 transparent;
    border-radius: 3px 3px 0 0;
    background-color: #ffffff;
  }

  .selectr-container.inverted .selectr-options-container {
    top: auto;
    bottom: calc(100% - 1px);
  }

  .selectr-container ::-webkit-input-placeholder {
    color: #6c7a86;
    opacity: 1;
  }

  .selectr-container ::-moz-placeholder {
    color: #6c7a86;
    opacity: 1;
  }

  .selectr-container :-ms-input-placeholder {
    color: #6c7a86;
    opacity: 1;
  }

  .selectr-container ::placeholder {
    color: #6c7a86;
    opacity: 1;
  }
`;
