import { b as bootstrapLazy } from './index-9596b62d.js';
import { a as patchEsm } from './patch-381d6d58.js';

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["bk-dropdown-list",[[6,"bk-dropdown-list",{"options":[1],"selectedOption":[1,"selected-option"],"disabled":[4],"searchable":[4],"noOptionText":[1,"no-option-text"],"searchText":[32],"_options":[32]}]]],["bk-pop-confirm",[[6,"bk-pop-confirm",{"message":[1],"confirmButtonText":[1,"confirm-button-text"],"cancelButtonText":[1,"cancel-button-text"],"confirmButtonVariant":[1,"confirm-button-variant"],"cancelButtonVariant":[1,"cancel-button-variant"],"disabled":[4],"show":[32]},[[0,"click","onClickHandler"]]]]],["bk-slider",[[1,"bk-slider",{"value":[1538],"step":[2],"variant":[1],"disabled":[4],"showTooltip":[4,"show-tooltip"],"toolTipState":[32]}]]],["bk-alert",[[6,"bk-alert",{"variant":[1],"shade":[1],"dismissible":[4]}]]],["bk-card",[[6,"bk-card",{"shadow":[1]}]]],["bk-modal",[[1,"bk-modal",{"open":[1540],"header":[1],"dismissible":[4],"hasFooter":[32]}]]],["bk-progress-bar",[[1,"bk-progress-bar",{"progress":[2],"showPercentageText":[4,"show-percentage-text"],"textInside":[4,"text-inside"],"variant":[1],"barType":[1,"bar-type"]}]]],["bk-switch",[[2,"bk-switch",{"isOn":[1540,"is-on"],"disabled":[516],"variant":[1]},[[0,"keydown","listenOnKeydown"],[0,"click","listenOnClick"]]]]],["bk-toast",[[1,"bk-toast",{"hideAfter":[2,"hide-after"],"transitionInDuration":[2,"transition-in-duration"],"transitionOutDuration":[2,"transition-out-duration"],"position":[1],"toasts":[32]},[[0,"$bkToast","listenToToast"]]]]],["bk-dropdown",[[1,"bk-dropdown",{"open":[1540],"clickOutsideToClose":[4,"click-outside-to-close"],"disabled":[4]},[[0,"click","onClickHandler"],[0,"bkCloseDropdownMenu","onCloseMenu"],[0,"keydown","onKeyboardHandler"]]]]],["bk-popover",[[1,"bk-popover",{"triggerOn":[1,"trigger-on"],"show":[1540],"placement":[1],"disabled":[4]}]]]], options);
  });
};

export { defineCustomElements };
