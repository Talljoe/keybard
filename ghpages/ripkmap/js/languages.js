const LANGUAGE_KEYS = {
  'English (US)': 'english_us',
  'English (UK)': 'english_uk',
  'Brazilian': "brazilian",
  'Canadian (CSA)': "canadian_csa",
  'Colemak': "colemak",
  'Croation (QWERTZ)': "croation_qwertz",
  'Danish': "danish",
  'EuroKey': "eurkey",
  'French (AZERTY)': "french_azerty",
  'French (Mac)': "french_mac",
  'German (QWERTZ)': "german_qwertz",
  'Hebrew (Standard)': "hebrew",
  'Hungarian (QWERTZ)': "hungarian_qwertz",
  'Italian': "italian_qwerty",
  'Japanese': "japanese_qwerty",
  'Latin American': "latin_american_qwerty",
  'Norwegian': "norwegian_qwerty",
  'Russian': "russian",
  'Slovak': "slovak",
  'Spanish': "spanish",
  'Swedish': "swedish",
  'Swedish (SWERTY)': "swedish_swerty",
  'Swiss (QWERTZ)': "swiss_qwertz",
  'Turkish': "turkish",
}
const LANGUAGE_MAP = {
  'english_us': {},
  'english_uk': {
    "KC_GRAVE": "¬<br>`",
    "KC_2": "\"<br>2",
    "KC_3": "£<br>3",
    "KC_QUOTE": "@<br>'",
    "KC_BSLASH": "~<br>#",
    "KC_NONUS_HASH": "|<br>\\"
  },
  "french_azerty": {
    "KC_GRAVE": "\u00b2",
    "KC_1": "&amp;<br>1",
    "KC_2": "\u00e9<br>2",
    "KC_3": "&quot;<br>3",
    "KC_4": "&#x27;<br>4",
    "KC_5": "(<br>5",
    "KC_6": "-<br>6",
    "KC_7": "\u00e8<br>7",
    "KC_8": "_<br>8",
    "KC_9": "\u00e7<br>9",
    "KC_0": "\u00e0<br>0",
    "KC_MINUS": ")<br>\u00b0",
    "KC_Q": "A",
    "KC_W": "Z",
    "KC_LBRACKET": "^<br>\u00a8",
    "KC_RBRACKET": "$<br>\u00a3",
    "KC_A": "Q",
    "KC_SCOLON": "M",
    "KC_QUOTE": "\u00f9<br>%",
    "KC_NONUS_HASH": "*<br>\u00b5",
    "KC_NONUS_BSLASH": "&lt;<br>&gt;",
    "KC_Z": "W",
    "KC_M": ",<br>?",
    "KC_COMMA": ";<br>.",
    "KC_DOT": ":<br>/",
    "KC_SLASH": "!<br>\u00a7"
  },
  "brazilian": {
    "KC_SCOLON": "\u00c7",
    "KC_SLASH": ";<br>:",
    "KC_GRAVE": "&#x27;<br>&quot;",
    "KC_QUOTE": "~<br>^",
    "KC_LBRACKET": "\u00b4<br>`",
    "KC_RBRACKET": "[<br>{",
    "KC_BSLASH": "]<br>}",
    "KC_NONUS_HASH": "]<br>}",
    "KC_NONUS_BSLASH": "\\<br>|",
    "KC_RO": "/<br>?",
    "KC_6": "6<br>\u00a8",
    "KC_KP_COMMA": ".",
    "KC_KP_DOT": ","
  },
  "canadian_csa": {
    "KC_GRAVE": "/|<br>\\",
    "KC_6": "6<br>?",
    "KC_7": "7{<br>&amp;",
    "KC_8": "8}<br>*",
    "KC_9": "9[<br>(",
    "KC_0": "0]<br>)",
    "KC_EQUAL": "=\u00ac<br>+",
    "KC_SLASH": "\u00c9",
    "KC_LBRACKET": "^`<br>\u00a8",
    "KC_RBRACKET": "\u00c7~",
    "KC_SCOLON": ";\u00b0<br>:",
    "KC_QUOTE": "\u00c8",
    "KC_NONUS_HASH": "\u00c0",
    "KC_NONUS_BSLASH": "\u00d9",
    "KC_Z": "Z\u00ab",
    "KC_X": "X\u00bb",
    "KC_COMMA": ",&lt;<br>&#x27;",
    "KC_DOT": ".&gt;<br>&quot;"
  },
  "colemak": {
    "KC_E": "F",
    "KC_R": "P",
    "KC_T": "G",
    "KC_Y": "J",
    "KC_U": "L",
    "KC_I": "U",
    "KC_O": "Y",
    "KC_P": ";",
    "KC_S": "R",
    "KC_D": "S",
    "KC_F": "T",
    "KC_G": "D",
    "KC_J": "N",
    "KC_K": "E",
    "KC_L": "I",
    "KC_SCOLON": "O",
    "KC_N": "K"
  },
  "croation_qwertz": {
    "KC_GRAVE": "\u00b8<br>\u00a8",
    "KC_1": "1~<br>!",
    "KC_2": "2\u02c7<br>&quot;",
    "KC_3": "3^<br>#",
    "KC_4": "4\u02d8<br>$",
    "KC_5": "5\u00b0<br>%",
    "KC_6": "6\u02db<br>&amp;",
    "KC_7": "7`<br>/",
    "KC_8": "8\u02d9<br>(",
    "KC_9": "9\u00b4<br>)",
    "KC_0": "0\u02dd<br>=",
    "KC_Q": "\\<br>Q",
    "KC_W": "|<br>W",
    "KC_E": "\u20ac<br>E",
    "KC_Y": "Z",
    "KC_MINUS": "&#x27;\u00a8<br>?",
    "KC_EQUAL": "+\u00b8<br>*",
    "KC_LBRACKET": "\u00f7<br>\u0160",
    "KC_RBRACKET": "\u00d7<br>\u0110",
    "KC_BSLASH": "\u00a4<br>\u017d",
    "KC_F": "[<br>F",
    "KC_G": "]<br>G",
    "KC_K": "\u0142<br>K",
    "KC_L": "\u0141<br>L",
    "KC_SCOLON": "\u010c",
    "KC_QUOTE": "\u00df<br>\u0106",
    "KC_NONUS_BSLASH": "&lt;<br>&gt;",
    "KC_Z": "Y",
    "KC_V": "@<br>V",
    "KC_B": "{<br>B",
    "KC_N": "}<br>N",
    "KC_M": "\u00a7<br>M",
    "KC_COMMA": ",<br>;",
    "KC_DOT": ".<br>:",
    "KC_SLASH": "-<br>_",
    "KC_TILD": "\u00a8",
    "KC_AT": "&quot;",
    "KC_CIRC": "&amp;",
    "KC_AMPR": "/",
    "KC_ASTR": "(",
    "KC_LPRN": ")",
    "KC_RPRN": "=",
    "KC_UNDS": "?",
    "KC_PLUS": "*",
    "KC_LCBR": "\u0160",
    "KC_RCBR": "\u0110",
    "KC_LT": ";",
    "KC_GT": ":",
    "KC_COLN": "\u010c",
    "KC_QUES": "_",
    "KC_DQUO": "\u0106",
    "KC_PIPE": "\u017d",
    "KC_NONUS_HASH": "\u00a4<br>\u017d",
    "KC_KP_DOT": ","
  },
  "danish": {
    "KC_GRAVE": "\u00bd<br>\u00a7",
    "KC_2": "2@<br>&quot;",
    "KC_3": "3\u00a3<br>#",
    "KC_4": "4$<br>\u00a4",
    "KC_6": "6<br>&amp;",
    "KC_7": "7{<br>/",
    "KC_8": "8[<br>(",
    "KC_9": "9]<br>)",
    "KC_0": "0}<br>=",
    "KC_MINUS": "+<br>?",
    "KC_EQUAL": "\u00b4|<br>`",
    "KC_LBRACKET": "\u00c5",
    "KC_RBRACKET": "\u00a8~<br>^",
    "KC_SCOLON": "\u00c6",
    "KC_QUOTE": "\u00d8",
    "KC_NONUS_HASH": "&#x27;<br>*",
    "KC_NONUS_BSLASH": "&lt;\\<br>&gt;",
    "KC_BSLASH": "&#x27;<br>*",
    "KC_COMMA": ",<br>;",
    "KC_DOT": ".<br>:",
    "KC_SLASH": "-<br>_",
    "KC_TILD": "\u00a7",
    "KC_AT": "&quot;",
    "KC_DLR": "\u00a4",
    "KC_CIRC": "&amp;",
    "KC_AMPR": "/",
    "KC_ASTR": "(",
    "KC_LPRN": ")",
    "KC_RPRN": "=",
    "KC_UNDS": "?",
    "KC_PLUS": "`",
    "KC_LCBR": "\u00c5",
    "KC_RCBR": "^",
    "KC_LT": ";",
    "KC_GT": ":",
    "KC_COLN": "\u00c6",
    "KC_PIPE": "*",
    "KC_QUES": "_",
    "KC_DQUO": "\u00d8",
    "KC_RALT": "AltGr",
    "RALT(kc)": "(kc)<br>AltGr",
    "RALT_T(kc)": "(kc)<br>AltGr_T"
  },
  "eurkey": {
    "KC_GRAVE": "``<br>~~",
    "KC_1": "1\u00a1<br>!\u00b9",
    "KC_2": "2\u00aa<br>@\u00b2",
    "KC_3": "3\u00ba<br>#\u00b3",
    "KC_4": "4\u00a3<br>$\u00a5",
    "KC_5": "5\u20ac<br>%\u00a2",
    "KC_6": "6^<br>^\u02c7",
    "KC_7": "7\u02da<br>&amp;\u00af",
    "KC_8": "8\u201e<br>*\u201a",
    "KC_9": "9\u201c<br>(\u2018",
    "KC_0": "0\u201d<br>)\u2019",
    "KC_Q": "\u00e6<br>Q",
    "KC_W": "\u00e5<br>W",
    "KC_E": "\u00eb<br>E",
    "KC_R": "\u00fd<br>R",
    "KC_T": "\u00fe<br>T",
    "KC_Y": "\u00ff<br>Y",
    "KC_U": "\u00fc<br>U",
    "KC_I": "\u00ef<br>I",
    "KC_O": "\u00f6<br>O",
    "KC_P": "\u0153<br>P",
    "KC_MINUS": "-\u00a9<br>_\u2116",
    "KC_EQUAL": "=\u00d7<br>+\u00f7",
    "KC_LBRACKET": "[\u00ab<br>{\u2039",
    "KC_RBRACKET": "]\u00bb<br>}\u203a",
    "KC_BSLASH": "\\\u00ac<br>|\u00a6",
    "KC_A": "\u00e4<br>A",
    "KC_S": "\u00df<br>S",
    "KC_D": "\u0111<br>D",
    "KC_F": "\u00e8<br>F",
    "KC_G": "\u00e9<br>G",
    "KC_H": "\u00f9<br>H",
    "KC_J": "\u00fa<br>J",
    "KC_K": "\u0133<br>K",
    "KC_L": "\u00f8<br>L",
    "KC_SCOLON": ";\u00b0<br>:\u00b7",
    "KC_QUOTE": "&#x27;\u00b4<br>&quot;\u00a8",
    "KC_NONUS_BSLASH": "\\<br>|",
    "KC_Z": "\u00e0<br>Z",
    "KC_X": "\u00e1<br>X",
    "KC_C": "\u00e7<br>C",
    "KC_V": "\u00ec<br>V",
    "KC_B": "\u00ed<br>B",
    "KC_N": "\u00f1<br>N",
    "KC_M": "M\u03a9<br>\u221a",
    "KC_COMMA": ",\u00f2<br>&lt;\u00d2",
    "KC_DOT": ".\u00f3<br>&gt;\u00d3",
    "KC_SLASH": "/\u00bf<br>?\u2026",
    "KC_RALT": "AltGr",
    "RALT(kc)": "(kc)<br>AltGr",
    "RALT_T(kc)": "(kc)<br>AltGr_T",
    "KC_TILD": "~~",
    "KC_EXLM": "!\u00b9",
    "KC_AT": "@\u00b2",
    "KC_HASH": "#\u00b3",
    "KC_DLR": "$\u00a5",
    "KC_PERC": "%\u00a2",
    "KC_CIRC": "^\u02c7",
    "KC_AMPR": "&amp;\u00af",
    "KC_ASTR": "*\u201a",
    "KC_LPRN": "(\u2018",
    "KC_RPRN": ")\u2019",
    "KC_UNDS": "_\u2116",
    "KC_PLUS": "+\u00f7",
    "KC_LCBR": "{\u2039",
    "KC_RCBR": "}\u203a",
    "KC_LT": "&lt;\u00d2",
    "KC_GT": "&gt;\u00d3",
    "KC_COLN": ":\u00b7",
    "KC_QUES": "?\u2026",
    "KC_DQUO": "&quot;\u00a8"
  },
  "french_mac": {
    "KC_GRAVE": "@<br>#",
    "KC_1": "&amp;<br>1",
    "KC_2": "\u00e9<br>2",
    "KC_3": "&quot;<br>3",
    "KC_4": "&#x27;<br>4",
    "KC_5": "(<br>5",
    "KC_6": "\u00a7<br>6",
    "KC_7": "\u00e8<br>7",
    "KC_8": "!<br>8",
    "KC_9": "\u00e7<br>9",
    "KC_0": "\u00e0<br>0",
    "KC_MINUS": ")<br>\u00b0",
    "KC_EQUAL": "-<br>_",
    "KC_Q": "A",
    "KC_W": "Z",
    "KC_LBRACKET": "^<br>\u00a8",
    "KC_RBRACKET": "$\u20ac<br>*",
    "KC_A": "Q",
    "KC_SCOLON": "M",
    "KC_QUOTE": "\u00f9<br>%",
    "KC_NONUS_HASH": "`<br>\u00a3",
    "KC_NONUS_BSLASH": "&lt;<br>&gt;",
    "KC_Z": "W",
    "KC_M": ",<br>?",
    "KC_COMMA": ";<br>.",
    "KC_DOT": ":<br>/",
    "KC_SLASH": "=<br>+"
  },
  "german_qwertz": {
    "KC_GRAVE": "^<br>\u00b0",
    "KC_2": "2<br>&quot;",
    "KC_3": "3<br>\u00a7",
    "KC_6": "6<br>&amp;",
    "KC_7": "7<br>/",
    "KC_8": "8<br>(",
    "KC_9": "9<br>)",
    "KC_0": "0<br>=",
    "KC_MINUS": "\u00df<br>?",
    "KC_EQUAL": "\u00b4<br>`",
    "KC_Y": "Z",
    "KC_LBRACKET": "\u00dc",
    "KC_RBRACKET": "+<br>*",
    "KC_SCOLON": "\u00d6",
    "KC_QUOTE": "\u00c4",
    "KC_NONUS_HASH": "#<br>&#x27;",
    "KC_NONUS_BSLASH": "&lt;<br>&gt;",
    "KC_Z": "Y",
    "KC_COMMA": ",<br>;",
    "KC_DOT": ".<br>:",
    "KC_SLASH": "-<br>_"
  },
  "hebrew": {
    "KC_GRAVE": ";\u05f3<br>~",
    "KC_3": "3\u20ac<br>#",
    "KC_4": "4\u20aa<br>#",
    "KC_5": "5\u00b0<br>%",
    "KC_6": "6\u25cc\u05ab<br>^",
    "KC_7": "7\u25cc\u05bd<br>&amp;",
    "KC_8": "8\u00d7<br>*",
    "KC_9": "9\u1d38\u1d3f\u1d39<br>)",
    "KC_0": "0\u1d3f\u1d38\u1d39<br>(",
    "KC_MINUS": "-\u05be<br>_",
    "KC_EQUAL": "=\u2013<br>+",
    "KC_Q": "/\u25cc\u05c2<br>Q",
    "KC_W": "&#x27;\u25cc\u05c1<br>W",
    "KC_E": "\u05e7\u25cc\u05b8<br>E",
    "KC_R": "\u05e8\u25cc\u05b3<br>R",
    "KC_T": "\u05d0<br>T",
    "KC_Y": "\u05d8\u05f0<br>Y",
    "KC_U": "\u05d5\u25cc\u05b9<br>U\u25cc\u05ba",
    "KC_I": "\u05df<br>I",
    "KC_O": "\u05dd<br>O",
    "KC_P": "\u05e4\u25cc\u05b7<br>P",
    "KC_A": "\u05e9<br>A",
    "KC_S": "\u05d3<br>S",
    "KC_D": "\u05d2<br>D",
    "KC_F": "\u05db<br>F",
    "KC_G": "\u05e2<br>G",
    "KC_H": "\u05d9<br>H",
    "KC_J": "\u05d7<br>J",
    "KC_K": "\u05dc<br>K",
    "KC_L": "\u05da<br>L\u201c",
    "KC_SCOLON": "\u05e3<br>:\u201d",
    "KC_QUOTE": ",<br>&quot;",
    "KC_Z": "\u05d6<br>Z",
    "KC_X": "\u05e1\u25cc\u05b6<br>X",
    "KC_C": "\u05d1\u25cc\u05b1<br>C",
    "KC_V": "\u05d4<br>V",
    "KC_B": "\u05e0<br>B\u05c6",
    "KC_N": "\u05de<br>N",
    "KC_M": "\u05e6\u25cc\u05b5<br>M",
    "KC_COMMA": "\u05ea\u2019<br>&lt;\u2018",
    "KC_DOT": "\u05e5\u201a<br>&gt;\u2019",
    "KC_SLASH": ".\u00f7<br>?"
  },
  "hungarian_qwertz": {
    "KC_GRAVE": "0<br>\u00a7",
    "KC_1": "1~<br>&#x27;",
    "KC_2": "2\u02c7<br>&quot;",
    "KC_3": "3^<br>+",
    "KC_4": "4\u02d8<br>!",
    "KC_5": "5\u00b0<br>%",
    "KC_6": "6\u02db<br>/",
    "KC_7": "7`<br>=",
    "KC_8": "8\u02d9<br>(",
    "KC_9": "9\u00b4<br>)",
    "KC_0": "\u02dd<br>\u00d6",
    "KC_MINUS": "\u00a8<br>\u00dc",
    "KC_EQUAL": "\u00b8<br>\u00d3",
    "KC_Q": "\\<br>Q",
    "KC_W": "|<br>W",
    "KC_E": "\u00c4<br>E",
    "KC_Y": "Z",
    "KC_U": "\u20ac<br>U",
    "KC_I": "\u00cd<br>I",
    "KC_LBRACKET": "\u00f7<br>\u0150",
    "KC_RBRACKET": "\u00d7<br>\u00da",
    "KC_A": "\u00e4<br>A",
    "KC_S": "\u0111<br>S",
    "KC_D": "\u0110<br>D",
    "KC_F": "[<br>F",
    "KC_G": "]<br>G",
    "KC_J": "\u00ed<br>J",
    "KC_K": "\u0142<br>K",
    "KC_L": "\u0141<br>L",
    "KC_SCOLON": "$<br>\u00c9",
    "KC_QUOTE": "\u00df<br>\u00c1",
    "KC_NONUS_HASH": "\u00a4<br>\u0170",
    "KC_NONUS_BSLASH": "&lt;<br>\u00cd",
    "KC_Z": "&gt;<br>Y",
    "KC_X": "#<br>X",
    "KC_C": "&amp;<br>C",
    "KC_V": "@<br>V",
    "KC_B": "{<br>B",
    "KC_N": "}<br>N",
    "KC_COMMA": ",;<br>?",
    "KC_DOT": ".<br>:",
    "KC_SLASH": "-*<br>_"
  },
  "italian_qwerty": {
    "KC_GRAVE": "\\<br>|",
    "KC_1": "1<br>!",
    "KC_2": "2<br>&quot;",
    "KC_3": "3<br>\u00a3",
    "KC_6": "6<br>&amp;",
    "KC_7": "7<br>/",
    "KC_8": "8<br>(",
    "KC_9": "9<br>)",
    "KC_0": "0<br>=",
    "KC_MINUS": "&#x27;<br>?",
    "KC_EQUAL": "\u00ec<br>^",
    "KC_E": "\u20ac<br>E",
    "KC_LBRACKET": "\u00e8[<br>\u00e9",
    "KC_RBRACKET": "+]<br>*",
    "KC_BSLASH": "\u00f9<br>\u00a7",
    "KC_SCOLON": "\u00f2@<br>\u00e7",
    "KC_QUOTE": "\u00e0#<br>\u00ba",
    "KC_NONUS_HASH": "\u00f9<br>\u00a7",
    "KC_NONUS_BSLASH": "&lt;<br>&gt;",
    "KC_COMMA": ",<br>;",
    "KC_DOT": ".<br>:",
    "KC_SLASH": "-<br>_",
    "KC_RALT": "AltGr",
    "RALT(kc)": "(kc)<br>AltGr",
    "RALT_T(kc)": "(kc)<br>AltGr_T",
    "KC_TILD": "|",
    "KC_AT": "&quot;",
    "KC_HASH": "\u00a3",
    "KC_CIRC": "&amp;",
    "KC_AMPR": "/",
    "KC_ASTR": "(",
    "KC_LPRN": ")",
    "KC_RPRN": "=",
    "KC_UNDS": "?",
    "KC_PLUS": "^",
    "KC_LCBR": "\u00e9",
    "KC_RCBR": "*",
    "KC_LT": ";",
    "KC_GT": ":",
    "KC_COLN": "\u00e7",
    "KC_PIPE": "\u00a7",
    "KC_QUES": "_",
    "KC_DQUO": "\u00b0"
  },
  "japanese_qwerty": {
    "KC_LBRACKET": "@<br>`",
    "KC_RBRACKET": "[<br>{",
    "KC_2": "2<br>&quot;",
    "KC_6": "6<br>&amp;",
    "KC_7": "7<br>&#x27;",
    "KC_8": "8<br>(",
    "KC_9": "9<br>)",
    "KC_0": "0<br>",
    "KC_MINUS": "-<br>=",
    "KC_EQUAL": "^<br>~",
    "KC_SCOLON": ";<br>+",
    "KC_QUOTE": ":<br>*",
    "KC_NONUS_HASH": "]<br>}",
    "KC_GRAVE": "ZEN<br>HAN/"
  },
  "latin_american_qwerty": {
    "KC_GRAVE": "|\u00ac<br>\u00b0",
    "KC_2": "2<br>&quot;",
    "KC_6": "6<br>&amp;",
    "KC_7": "7<br>/",
    "KC_8": "8<br>(",
    "KC_9": "9<br>)",
    "KC_0": "0<br>=",
    "KC_Q": "@<br>Q",
    "KC_MINUS": "&#x27;\\<br>?",
    "KC_EQUAL": "\u00bf<br>\u00a1",
    "KC_LBRACKET": "\u00b4<br>\u00a8",
    "KC_RBRACKET": "+<br>*",
    "KC_SCOLON": "\u00d1",
    "KC_QUOTE": "{<br>[",
    "KC_NONUS_BSLASH": "&lt;<br>&gt;",
    "KC_BSLASH": "]<br>}",
    "KC_COMMA": ",<br>;",
    "KC_DOT": ":<br>.",
    "KC_SLASH": "-<br>_"
  },
  "norwegian_qwerty": {
    "KC_GRAVE": "|<br>\u00a7",
    "KC_2": "2@<br>&quot;",
    "KC_3": "3\u00a3<br>#",
    "KC_4": "4$<br>\u00a4",
    "KC_6": "6<br>&amp;",
    "KC_7": "7{<br>/",
    "KC_8": "8[<br>(",
    "KC_9": "9]<br>)",
    "KC_0": "0}<br>=",
    "KC_MINUS": "+<br>?",
    "KC_EQUAL": "\\\u00b4<br>`",
    "KC_LBRACKET": "\u00c5",
    "KC_RBRACKET": "\u00a8~<br>^",
    "KC_SCOLON": "\u00d8",
    "KC_QUOTE": "\u00c6",
    "KC_NONUS_HASH": "&#x27;<br>*",
    "KC_BSLASH": "&#x27;<br>*",
    "KC_NONUS_BSLASH": "&lt;<br>&gt;",
    "KC_COMMA": ",<br>;",
    "KC_DOT": ".<br>:",
    "KC_SLASH": "-<br>_",
    "KC_TILD": "\u00a7",
    "KC_AT": "&quot;",
    "KC_DLR": "\u00a4",
    "KC_CIRC": "&amp;",
    "KC_AMPR": "/",
    "KC_ASTR": "(",
    "KC_LPRN": ")",
    "KC_RPRN": "=",
    "KC_UNDS": "?",
    "KC_PLUS": "`",
    "KC_LCBR": "\u00c5",
    "KC_RCBR": "^",
    "KC_LT": ";",
    "KC_GT": ":",
    "KC_COLN": "\u00d8",
    "KC_PIPE": "*",
    "KC_QUES": "_",
    "KC_DQUO": "\u00c6",
    "KC_RALT": "AltGr",
    "RALT(kc)": "(kc)<br>AltGr",
    "RALT_T(kc)": "(kc)<br>AltGr_T"
  },
  "russian": {
    "KC_GRAVE": "`\u0401<br>~",
    "KC_2": "2<br>@&quot;",
    "KC_3": "3<br>#\u2116",
    "KC_4": "4<br>$;",
    "KC_6": "6<br>^:",
    "KC_7": "7<br>&amp;?",
    "KC_Q": "\u0419<br>Q",
    "KC_W": "\u0426<br>W",
    "KC_E": "\u0423<br>E",
    "KC_R": "\u041a<br>R",
    "KC_T": "\u0415<br>T",
    "KC_Y": "\u041d<br>Y",
    "KC_U": "\u0413<br>U",
    "KC_I": "\u0428<br>I",
    "KC_O": "\u0429<br>O",
    "KC_P": "\u0417<br>P",
    "KC_LBRACKET": "[\u0425<br>{",
    "KC_RBRACKET": "]\u042a<br>}",
    "KC_BSLASH": "\\<br>|/",
    "KC_A": "\u0424<br>A",
    "KC_S": "\u042b<br>S",
    "KC_D": "\u0412<br>D",
    "KC_F": "\u0410<br>F",
    "KC_G": "\u041f<br>G",
    "KC_H": "\u0420<br>H",
    "KC_J": "\u041e<br>J",
    "KC_K": "\u041b<br>K",
    "KC_L": "\u0414<br>L",
    "KC_SCOLON": ";\u0416<br>:",
    "KC_QUOTE": "&#x27;\u042d<br>&quot;",
    "KC_Z": "\u042f<br>Z",
    "KC_X": "\u0427<br>X",
    "KC_C": "\u0421<br>C",
    "KC_V": "\u041c<br>V",
    "KC_B": "\u0418<br>B",
    "KC_N": "\u0422<br>N",
    "KC_M": "\u042c<br>M",
    "KC_COMMA": ",\u0411<br>&lt;",
    "KC_DOT": ".\u042e<br>&gt;",
    "KC_SLASH": "/.<br>?,"
  },
  "slovak": {
    "KC_GRAVE": "\u00b0~<br>;",
    "KC_1": "+^<br>1",
    "KC_2": "\u013e\u02d8<br>2",
    "KC_3": "\u0161\u00b0<br>3",
    "KC_4": "\u010d\u02db<br>4",
    "KC_5": "\u0165`<br>5",
    "KC_6": "\u017e\u02d9<br>6",
    "KC_7": "\u00fd\u02dd<br>7",
    "KC_8": "\u00e1\u00a8<br>8",
    "KC_9": "\u00ed\u00b8<br>9",
    "KC_0": "\u00e9<br>0",
    "KC_Q": "\\<br>Q",
    "KC_W": "|<br>W",
    "KC_E": "\u20ac<br>E",
    "KC_P": "&#x27;<br>P",
    "KC_MINUS": "=<br>%",
    "KC_EQUAL": "\u00b4<br>\u02c7",
    "KC_LBRACKET": "\u00fa\u00f7<br>/",
    "KC_RBRACKET": "\u00e4\u00d7<br>(",
    "KC_BSLASH": "\u0148<br>)",
    "KC_SCOLON": "\u00f4<br>&quot;",
    "KC_QUOTE": "\u00a7<br>!",
    "KC_NONUS_BSLASH": "&amp;&lt;<br>*",
    "KC_Z": "&gt;<br>Z",
    "KC_X": "#<br>X",
    "KC_V": "@<br>V",
    "KC_B": "{<br>B",
    "KC_N": "}<br>N",
    "KC_COMMA": ",<br>?",
    "KC_DOT": ".<br>:",
    "KC_SLASH": "-<br>_",
    "KC_RALT": "AltGr",
    "RALT(kc)": "(kc)<br>AltGr",
    "RALT_T(kc)": "(kc)<br>AltGr_T",
    "KC_TILD": "~<br>\u00b0",
    "KC_EXLM": "^<br>1",
    "KC_AT": "\u02d8<br>2",
    "KC_HASH": "\u00b0<br>3",
    "KC_DLR": "\u02db<br>4",
    "KC_PERC": "`<br>5",
    "KC_CIRC": "\u02d9<br>6",
    "KC_AMPR": "\u02dd<br>7",
    "KC_ASTR": "\u00a8<br>8",
    "KC_LPRN": "\u00b8<br>9",
    "KC_RPRN": "0",
    "KC_UNDS": "%<br>=",
    "KC_PLUS": "\u02c7<br>\u00b4",
    "KC_LCBR": "\u00f7<br>/",
    "KC_RCBR": "\u00d7<br>(",
    "KC_LT": "?",
    "KC_GT": ":",
    "KC_COLN": "&quot;",
    "KC_QUES": "_",
    "KC_DQUO": "!"
  },
  "spanish": {
    "KC_GRAVE": "|\\<br>\u00b0",
    "KC_1": "1|<br>!",
    "KC_2": "2@<br>&quot;",
    "KC_3": "3#<br>\u00b7",
    "KC_6": "6\u00ac<br>&amp;",
    "KC_7": "7<br>/",
    "KC_8": "8<br>(",
    "KC_9": "9<br>)",
    "KC_0": "0<br>=",
    "KC_E": "\u20ac<br>E",
    "KC_MINUS": "&#x27;<br>?",
    "KC_EQUAL": "\u00bf<br>\u00a1",
    "KC_LBRACKET": "`[<br>^",
    "KC_RBRACKET": "+]<br>*",
    "KC_SCOLON": "\u00d1",
    "KC_QUOTE": "\u00b4{<br>\u00a8",
    "KC_NONUS_BSLASH": "&lt;<br>&gt;",
    "KC_BSLASH": "}<br>\u00c7",
    "KC_COMMA": ",<br>;",
    "KC_DOT": ":<br>.",
    "KC_SLASH": "-<br>_"
  },
  "swedish": {
    "KC_GRAVE": "\u00a7<br>\u00bd",
    "KC_2": "2@<br>&quot;",
    "KC_3": "3\u00a3<br>#",
    "KC_4": "4$<br>\u00a4",
    "KC_5": "5\u20ac<br>%",
    "KC_6": "6<br>&amp;",
    "KC_7": "7{<br>/",
    "KC_8": "8[<br>(",
    "KC_9": "9]<br>)",
    "KC_0": "0}<br>=",
    "KC_MINUS": "+\\<br>?",
    "KC_EQUAL": "\u00b4<br>`",
    "KC_LBRACKET": "\u00c5",
    "KC_RBRACKET": "\u00a8~<br>^",
    "KC_SCOLON": "\u00d6",
    "KC_QUOTE": "\u00c4",
    "KC_NONUS_HASH": "&#x27;<br>*",
    "KC_NONUS_BSLASH": "&gt;|<br>&lt;",
    "KC_COMMA": ",<br>;",
    "KC_DOT": ".<br>:",
    "KC_SLASH": "-<br>_",
    "KC_BSLASH": "&#x27;<br>*",
    "KC_TILD": "\u00bd",
    "KC_AT": "&quot;",
    "KC_DLR": "\u00a4",
    "KC_CIRC": "&amp;",
    "KC_AMPR": "/",
    "KC_ASTR": "(",
    "KC_LPRN": ")",
    "KC_RPRN": "=",
    "KC_UNDS": "?",
    "KC_PLUS": "`",
    "KC_LCBR": "\u00c5",
    "KC_RCBR": "^",
    "KC_LT": ";",
    "KC_GT": ":",
    "KC_COLN": "\u00d6",
    "KC_PIPE": "*",
    "KC_QUES": "_",
    "KC_DQUO": "\u00c4",
    "KC_RALT": "AltGr",
    "RALT(kc)": "(kc)<br>AltGr",
    "RALT_T(kc)": "(kc)<br>AltGr_T"
  },
  "swedish_swerty": {
    "KC_GRAVE": "`\u00a7<br>~\u00bd",
    "KC_2": "2&quot;<br>@",
    "KC_3": "3\u00a3<br>#",
    "KC_4": "4\u00a4<br>$",
    "KC_5": "5\u20ac<br>%",
    "KC_6": "6^<br>^",
    "KC_7": "7{<br>&amp;",
    "KC_8": "8[<br>*",
    "KC_9": "9]<br>(",
    "KC_0": "0}<br>)",
    "KC_MINUS": "-\u00a8<br>_^",
    "KC_EQUAL": "=~<br>+",
    "KC_E": "\u20ac<br>E",
    "KC_O": "{<br>O",
    "KC_P": "}<br>P",
    "KC_LBRACKET": "[<br>\u00c5{",
    "KC_RBRACKET": "`]<br>\u00b4}",
    "KC_SCOLON": ";<br>\u00d6:",
    "KC_QUOTE": "&#x27;<br>\u00c4&quot;",
    "KC_M": "\u00b5<br>M",
    "KC_DOT": ".:<br>&gt;"
  },
  "swiss_qwertz": {
    "KC_GRAVE": "\u00a7<br>\u00b0",
    "KC_1": "1\u00a6<br>+",
    "KC_2": "2@<br>&quot;",
    "KC_3": "3#<br>*",
    "KC_4": "4\u00b0<br>\u00e7",
    "KC_5": "5\u00a7<br>%",
    "KC_6": "6\u00ac<br>&amp;",
    "KC_7": "7|<br>/",
    "KC_8": "8\u00a2<br>(",
    "KC_9": "9<br>)",
    "KC_0": "0<br>=",
    "KC_MINUS": "&#x27;\u00b4<br>?",
    "KC_EQUAL": "^~<br>`",
    "KC_LBRACKET": "\u00fc\u00e8[<br>\u00e8\u00fc",
    "KC_RBRACKET": "&quot;]<br>!",
    "KC_SCOLON": "\u00f6\u00e9<br>\u00e9\u00f6",
    "KC_QUOTE": "\u00e4\u00e0{<br>\u00e0\u00e4",
    "KC_NONUS_HASH": "$}<br>\u00a3",
    "KC_NONUS_BSLASH": "&lt;\\<br>&gt;",
    "KC_COMMA": ",<br>;",
    "KC_DOT": ".<br>:",
    "KC_SLASH": "-<br>_",
    "KC_BSLASH": "$}<br>\u00a3",
    "KC_TILD": "\u00b0",
    "KC_AT": "&quot;",
    "KC_DLR": "\u00e7",
    "KC_CIRC": "&amp;",
    "KC_AMPR": "/",
    "KC_ASTR": "(",
    "KC_LPRN": ")",
    "KC_RPRN": "=",
    "KC_UNDS": "?",
    "KC_PLUS": "`",
    "KC_LCBR": "\u00fc",
    "KC_RCBR": "!",
    "KC_LT": ";",
    "KC_GT": ":",
    "KC_COLN": "\u00f6",
    "KC_PIPE": "\u00a3",
    "KC_QUES": "_",
    "KC_DQUO": "\u00e4",
    "KC_RALT": "AltGr",
    "RALT(kc)": "(kc)<br>AltGr",
    "RALT_T(kc)": "(kc)<br>AltGr_T",
    "KC_Z": "Y",
    "KC_Y": "Z"
  },
  "turkish": {
    "KC_GRAVE": "&quot;<br>\u00e9",
    "KC_1": "1<br>!",
    "KC_2": "2\u00a3<br>&#x27;",
    "KC_3": "3#<br>^",
    "KC_4": "4$<br>+",
    "KC_5": "5<br>%",
    "KC_6": "6<br>&amp;",
    "KC_7": "7{<br>/",
    "KC_8": "8[<br>(",
    "KC_9": "9]<br>)",
    "KC_0": "0}<br>=",
    "KC_MINUS": "*\\<br>?",
    "KC_EQUAL": "-<br>_",
    "KC_Q": "@<br>Q",
    "KC_E": "\u20ac<br>E",
    "KC_T": "\u20ba<br>T",
    "KC_A": "\u00e6<br>A",
    "KC_S": "\u00df<br>S",
    "KC_LBRACKET": "\u00a8<br>\u011e",
    "KC_RBRACKET": "~<br>\u00dc",
    "KC_SCOLON": "\u00b4<br>\u015e",
    "KC_QUOTE": "\u0130",
    "KC_COMMA": "\u00d6",
    "KC_DOT": "\u00c7",
    "KC_NONUS_HASH": ",`<br>;",
    "KC_NONUS_BSLASH": "&lt;|<br>&gt;",
    "KC_SLASH": ".<br>:"
  }
}