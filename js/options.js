/*----------------------------------------------------------------------------*

    The Password Generator: Options.
        option.js

 *----------------------------------------------------------------------------*/
/**
 *  @brief  Options View class.
 */
var OptView = OptView || (function() {
    //-------------------------------------------
    //  Private Functions.
    /** @brief  Get the Scale-input element. */
    var getInputPasswordDigitsElement = function() {
        return document.getElementById('input_password_digits');
    };
    /** @brief  Get a checkbox element of the UseNumbers. */
    var getUseNumbersCheckbox = function() {
        return document.getElementById('input_use_numbers');
    };
    /** @brief  Get a checkbox element of the Uppercase. */
    var getUseUppercaseCheckbox = function() {
        return document.getElementById('input_use_uppercase');
    };
    /** @brief  Get a checkbox element of the Lowercase. */
    var getUseLowercaseCheckbox = function() {
        return document.getElementById('input_use_lowercase');
    };
    /** @brief  Get a checkbox element of the Underline. */
    var getUseUnderlineCheckbox = function() {
        return document.getElementById('input_use_underline');
    };
    /** @brief  Get a checkbox element of the Space. */
    var getUseSpaceCheckbox = function() {
        return document.getElementById('input_use_space');
    };
    /** @brief  Get the save button. */
    var getSaveButton = function() {
        return document.getElementById('save_options');
    };

    /**
     *  @brief  Save input options.
     */
    var saveOptions = function() {
        // save password digits.
        var pw_digits = getInputPasswordDigitsElement().value;
        if (pw_digits == '' || isNaN(pw_digits)) {
            alert('Error occurrred!\nPlease check your input.');
            return;
        }
        UserConfig.setPasswordDigits(pw_digits);

        // save config flags.
        UserConfig.setUseNumbers(getUseNumbersCheckbox().checked);
        UserConfig.setUseUppercase(getUseUppercaseCheckbox().checked);
        UserConfig.setUseLowercase(getUseLowercaseCheckbox().checked);
        UserConfig.setUseUnderline(getUseUnderlineCheckbox().checked);
        UserConfig.setUseSpace(getUseSpaceCheckbox().checked);
    };

    //-------------------------------------------
    //  Public Functions.
    return {
        /**
         *  @brief  Initialize view class.
         */
        'init' : function() {
            // Init opts.
            getInputPasswordDigitsElement().value = UserConfig.getPasswordDigits();
            getUseNumbersCheckbox().checked = UserConfig.getUseNumbers();
            getUseUppercaseCheckbox().checked = UserConfig.getUseUppercase();
            getUseLowercaseCheckbox().checked = UserConfig.getUseLowercase();
            getUseUnderlineCheckbox().checked = UserConfig.getUseUnderline();
            getUseSpaceCheckbox().checked = UserConfig.getUseSpace();

            // init save button.
            getSaveButton().onclick = saveOptions;
        },
    };
})();

/**
 *  @brief  Called when the page loaded.
 */
window.onload = function() {
    OptView.init();
};
