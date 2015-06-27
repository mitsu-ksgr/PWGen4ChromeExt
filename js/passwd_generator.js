/*----------------------------------------------------------------------------*

    Password Generator.
        passwd_generator.js

 *----------------------------------------------------------------------------*/
/**
 *  @brief  PasswdGenerator View Class.
 */
var PasswdGeneratorView = PasswdGeneratorView || (function() {
    //-------------------------------------------
    //  Private functions: Utilities.
    /**
     *  @brief  Shuffle an array.
     *  @param  array   the array.
     *  @return Shuffled array.
     */
    var shuffleArray = function(array) {
        var n = array.length;
        while (n) {
            var i = Math.floor(Math.random() * n--);
            var temp = array[n];
            array[n] = array[i];
            array[i] = temp;
        }
        return array;
    };
    /**
     *  @brief  Generate password.
     *  @param  use_chars   List of usable characters.
     *  @param  digits      Password digits.
     *  @return Password.
     */
     var generatePassword = function(use_chars, digits) {
        var ch_list = shuffleArray(use_chars.split(''));
        var passwd = [];

        for(var i = 0; i < digits; ++i) {
            passwd.push(ch_list[Math.floor(Math.random() * ch_list.length)]);
        }

        return passwd.join('');
    };

    //-------------------------------------------
    //  Private functions: Get Elements.
    /** @brief  Get the Scale-input element. */
    var getInputPasswordDigitsElement = function() {
        return document.getElementById('passwd_digits');
    };
    /** @brief  Get a checkbox element of the UseNumbers. */
    var getUseNumbersCheckbox = function() {
        return document.getElementById('use_number');
    };
    /** @brief  Get a checkbox element of the Uppercase. */
    var getUseUppercaseCheckbox = function() {
        return document.getElementById('use_uppercase');
    };
    /** @brief  Get a checkbox element of the Lowercase. */
    var getUseLowercaseCheckbox = function() {
        return document.getElementById('use_lowercase');
    };
    /** @brief  Get a checkbox element of the Underline. */
    var getUseUnderlineCheckbox = function() {
        return document.getElementById('use_underline');
    };
    /** @brief  Get a checkbox element of the Space. */
    var getUseSpaceCheckbox = function() {
        return document.getElementById('use_space');
    };
    /** @brief  Get a p element for the result. */
    var getResultElement = function() {
        return document.getElementById('result');
    };
    /** @brief  Get the generate button. */
    var getGenerateButton = function() {
        return document.getElementById('generate');
    };

    //-------------------------------------------
    //  Private functions: for password generate.
    /**
     *  @brief  Get generate options.
     */
    var getOptions = function() {
        // Get password digits.
        var pw_digits = getInputPasswordDigitsElement().value;
        if (pw_digits == '' || isNaN(pw_digits)) {
            pw_digits = UserConfig.getPasswordDigits();
        }

        // Get use characters.
        var char_list = '';
        if (getUseNumbersCheckbox().checked)
            char_list += '0123456789';
        if (getUseUppercaseCheckbox().checked)
            char_list += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (getUseLowercaseCheckbox().checked)
            char_list += 'abcdefghijklmnopqrstuvwxyz';
        if (getUseUnderlineCheckbox().checked)
            char_list += '____';    // Adjust probability of occurrence
        if (getUseSpaceCheckbox().checked)
            char_list += ' ';

        return {"UseCharacters": char_list, "PasswordDigits": pw_digits};
    };

    /**
     *  @brief  Execute the password generation.
     */
    var executePasswordGeneration = function() {
        var opts = getOptions();
        var result = generatePassword(opts.UseCharacters, opts.PasswordDigits);
        getResultElement().innerHTML = result;
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
            getGenerateButton().onclick = executePasswordGeneration;

            // first password.
            executePasswordGeneration();
        },
    };
})();

/**
 *  @brief  Called when the page loaded.
 */
window.onload = function() {
    PasswdGeneratorView.init();
};
