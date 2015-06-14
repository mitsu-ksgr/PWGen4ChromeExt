/*----------------------------------------------------------------------------*

    Password Generator.

 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
//  Utilities.
/**
 *  @brief  Shuffle an array.
 *  @param  array   the array.
 *  @return Shuffled array.
 */
function shuffleArray(array) {
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
 *  @param  chars   List of usable characters.
 *  @param  digits  Password digits.
 *  @return Password.
 */
function generatePassword(chars, digits) {
    var ch_list = shuffleArray(chars.split(''));
    var passwd = [];

    for(var i = 0; i < digits; ++i) {
        passwd.push(ch_list[Math.floor(Math.random() * ch_list.length)]);
    }

    return passwd.join('');
};


//-----------------------------------------------------------------------------
//  Option Support.
/**
 *  @brief  init options.
 */
function initOptions() {
    document.getElementById('use_number').checked = true;
    document.getElementById('use_uppercase').checked = true;
    document.getElementById('use_lowercase').checked = true;
    document.getElementById('use_underscore').checked = true;
    document.getElementById('use_space').checked = false;
    document.getElementById('passwd_digits').value = 16;
};

/**
 *  @brief  Get generate options.
 */
function getOptions() {
    var char_list = '';
    if (document.getElementById('use_number').checked)
        char_list += '0123456789';
    if (document.getElementById('use_uppercase').checked)
        char_list += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (document.getElementById('use_lowercase').checked)
        char_list += 'abcdefghijklmnopqrstuvwxyz';
    if (document.getElementById('use_underscore').checked)
        char_list += '____';    // Adjust probability of occurrence
    if (document.getElementById('use_space').checked)
        char_list += ' ';

    return {
        "chars": char_list,
        "digits": document.getElementById('passwd_digits').value,
    };
};


//-----------------------------------------------------------------------------
//  View Events.
/**
 *  @brief  Execute the password generation.
 */
function executePasswordGeneration() {
    var opt = getOptions();
    var result = generatePassword(opt.chars, opt.digits);
    document.getElementById('result').innerHTML = result;
};

/**
 *  @brief  Called when the page loaded.
 */
document.body.onload = function() {
    initOptions();
    executePasswordGeneration();
};

/**
 *  @brief  Called when the generate-button is pressed.
 */
document.getElementById('generate').onclick = function() {
    executePasswordGeneration();
};


