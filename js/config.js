/*----------------------------------------------------------------------------*

    The Password Generator.
        config.js

 *----------------------------------------------------------------------------*/
/**
 *  @brief  Original size of amesh-images.
 */
const OriginImageSize = {
    'width' : 770.0, 'height' : 480.0,
};

/**
 *  @brief  User config manager.
 */
var UserConfig = UserConfig || (function() {
    //-------------------------------------------
    //  Key Names.
    const Key = {};
    Key.PasswordDigits  = 'password_digits';
    Key.UseNumbers      = 'use_numbers';
    Key.UseUppercase    = 'use_uppercase';
    Key.UseLowercase    = 'use_lowercase';
    Key.UseUnderline    = 'use_underline';
    Key.UseSpace        = 'use_space';


    //-------------------------------------------
    //  Private functions.
    /** @brief  Get a default value of each configs. */
    var getDefaultValue = function(key) {
        const DefValue = {};
        DefValue[Key.PasswordDigits] = 16;
        DefValue[Key.UseNumbers]     = true;
        DefValue[Key.UseUppercase]   = true;
        DefValue[Key.UseLowercase]   = true;
        DefValue[Key.UseUnderline]   = true;
        DefValue[Key.UseSpace]       = false;
        return DefValue[key];
    };

    /** @brief  Parses a string and returns an bool. */
    var parseBool = function(str_bool) {
        return str_bool == "true";
    };
    /**
        @brief  Get a config flag corresponding to specified key -
                from the local storage.
                if not yet been set, return a default value.
    */
    var getConfigFlag = function(key) {
        var is_use = localStorage.getItem(key);
        return is_use == null ? getDefaultValue(key) : parseBool(is_use);
    };


    //-------------------------------------------
    //  Public functions.
    return {
        /** @brief  Get a config value of the password digits. */
        'getPasswordDigits' : function() {
            var digits = localStorage.getItem(Key.PasswordDigits);
            return digits == null ?
                    getDefaultValue(Key.PasswordDigits) : parseInt(digits);
        },
        /** @brief  Set a config value of the password digits. */
        'setPasswordDigits' : function(digits) {
            localStorage.setItem(Key.PasswordDigits, digits);
        },

        /** @brief  Get a config flag of whether or not to use the numbers. */
        'getUseNumbers' : function() {
            return getConfigFlag(Key.UseNumbers);
        },
        /** @brief  Set a config flag of whether or not to use the numbers. */
        'setUseNumbers' : function(is_use) {
            localStorage.setItem(Key.UseNumbers, is_use);
        },

        /** @brief  Get a config flag of whether or not to use the uppercase. */
        'getUseUppercase' : function() {
            return getConfigFlag(Key.UseUppercase);
        },
        /** @brief  Set a config flag of whether or not to use the uppercase. */
        'setUseUppercase' : function(is_use) {
            localStorage.setItem(Key.UseUppercase, is_use);
        },

        /** @brief  Get a config flag of whether or not to use the lowercase. */
        'getUseLowercase' : function() {
            return getConfigFlag(Key.UseLowercase);
        },
        /** @brief  Set a config flag of whether or not to use the lowercase. */
        'setUseLowercase' : function(is_use) {
            localStorage.setItem(Key.UseLowercase, is_use);
        },

        /** @brief  Get a config flag of whether or not to use the underline. */
        'getUseUnderline' : function() {
            return getConfigFlag(Key.UseUnderline);
        },
        /** @brief  Set a config flag of whether or not to use the underline. */
        'setUseUnderline' : function(is_use) {
            localStorage.setItem(Key.UseUnderline, is_use);
        },

        /** @brief  Get a config flag of whether or not to use the space. */
        'getUseSpace' : function() {
            return getConfigFlag(Key.UseSpace);
        },
        /** @brief  Set a config flag of whether or not to use the space. */
        'setUseSpace' : function(is_use) {
            localStorage.setItem(Key.UseSpace, is_use);
        },
    };
})();
