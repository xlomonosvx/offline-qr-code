import "https://unpkg.com/mocha@5.2.0/mocha.js"; /* globals mocha */

/* tests */
import "./dataTest/globalConsts.test.js";
import "./dataTest/messageLevel.test.js";
import "./dataTest/tips.test.js";
import "./dataTest/defaultSettings.test.js";
import "./colors.test.js";
import "./iconHandler.test.js";
import "./localiser.test.js";
import "./addonSettings.test.js";
import "./logger.test.js";
import "./messageHandler.test.js";
import "./randomTips.test.js";
import "./automaticSettings.test.js";

mocha.checkLeaks();
mocha.run();
