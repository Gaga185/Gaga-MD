process.env.NODE_TLS_REJECT_UNAUTHORIZED = '1';
import './config.js';
import _0x494204 from 'dotenv';
import { existsSync, readFileSync, readdirSync, unlinkSync, watch } from 'fs';
import { createRequire } from 'module';
import _0x1af2e0, { join } from 'path';
import { platform } from 'process';
import { fileURLToPath, pathToFileURL } from 'url';
import 'ws';
import _0x1e5f67 from './lib/makesession.js';
import _0x26195c from './lib/tempclear.js';
global.__filename = function filename(_0x5d220f = import.meta.url, _0x1218a0 = platform !== "win32") {
  return _0x1218a0 ? /file:\/\/\//.test(_0x5d220f) ? fileURLToPath(_0x5d220f) : _0x5d220f : pathToFileURL(_0x5d220f).toString();
};
global.__dirname = function dirname(_0x4f7595) {
  return _0x1af2e0.dirname(global.__filename(_0x4f7595, true));
};
global.__require = function require(_0x19447f = import.meta.url) {
  return createRequire(_0x19447f);
};
global.gurubot = "https://www.guruapi.tech/api";
import _0x3a0015 from 'chalk';
import { spawn } from 'child_process';
import _0x498cfb from 'lodash';
import { JSONFile, Low } from 'lowdb';
import _0xdd1dab from 'node-cache';
import { default as _0x333424, default as _0x3780b8 } from 'pino';
import _0xe61257 from 'syntax-error';
import { format } from 'util';
import _0x1900da from 'yargs';
import _0x4df306 from './lib/cloudDBAdapter.js';
import { MongoDB } from './lib/mongoDB.js';
import { makeWASocket, protoType, serialize } from './lib/simple.js';
const {
  DisconnectReason,
  useMultiFileAuthState,
  MessageRetryMap,
  fetchLatestWaWebVersion,
  makeCacheableSignalKeyStore,
  makeInMemoryStore,
  proto,
  delay,
  jidNormalizedUser,
  PHONENUMBER_MCC
} = await (await import("@whiskeysockets/baileys"))["default"];
import _0x491fbc from 'readline';
_0x494204.config();
async function main() {
  const _0x4c07c6 = process.env.SESSION_ID;
  if (!_0x4c07c6) {
    console.error("Environment variable not found.");
    return;
  }
  try {
    await _0x1e5f67(_0x4c07c6);
    console.log("processTxtAndSaveCredentials completed.");
  } catch (_0x8019c1) {
    console.error('Error:', _0x8019c1);
  }
}
main();
await delay(10000);
const pairingCode = !!global.pairingNumber || process.argv.includes("--pairing-code");
const useQr = process.argv.includes("--qr");
const MAIN_LOGGER = _0x3780b8({
  'timestamp': () => ",\"time\":\"" + new Date().toJSON() + "\""
});
const logger = MAIN_LOGGER.child({});
logger.level = "fatal";
const store = makeInMemoryStore({
  'logger': logger
});
store?.["readFromFile"]("./sessions.json");
setInterval(() => {
  store?.["writeToFile"]("./sessions.json");
}, 60000);
const msgRetryCounterCache = new _0xdd1dab();
const rl = _0x491fbc.createInterface({
  'input': process.stdin,
  'output': process.stdout
});
const question = _0xffd1e4 => new Promise(_0x23a1d7 => rl.question(_0xffd1e4, _0x23a1d7));
const {
  chain
} = _0x498cfb;
const PORT = process.env.PORT || process.env.SERVER_PORT || 0xbb8;
protoType();
serialize();
global.API = (_0x16b38c, _0x32eb75 = '/', _0x161a1f = {}, _0x46aee8) => (_0x16b38c in global.APIs ? global.APIs[_0x16b38c] : _0x16b38c) + _0x32eb75 + (_0x161a1f || _0x46aee8 ? '?' + new URLSearchParams(Object.entries({
  ..._0x161a1f,
  ...(_0x46aee8 ? {
    [_0x46aee8]: global.APIKeys[_0x16b38c in global.APIs ? global.APIs[_0x16b38c] : _0x16b38c]
  } : {})
})) : '');
global.timestamp = {
  'start': new Date()
};
const __dirname = global.__dirname(import.meta.url);
global.opts = new Object(_0x1900da(process.argv.slice(0x2)).exitProcess(false).parse());
global.prefix = new RegExp('^[' + (process.env.PREFIX || "*/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-.@").replace(/[|\\{}()[\]^$+*?.\-\^]/g, "\\$&") + ']');
global.opts.db = process.env.DATABASE_URL;
global.db = new Low(/https?:\/\//.test(opts.db || '') ? new _0x4df306(opts.db) : /mongodb(\+srv)?:\/\//i.test(opts.db) ? new MongoDB(opts.db) : new JSONFile((opts._[0x0] ? opts._[0x0] + '_' : '') + 'database.json'));
global.DATABASE = global.db;
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) {
    return new Promise(_0x9fb8b1 => setInterval(async function () {
      if (!global.db.READ) {
        clearInterval(this);
        _0x9fb8b1(global.db.data == null ? global.loadDatabase() : global.db.data);
      }
    }, 1000));
  }
  if (global.db.data !== null) {
    return;
  }
  global.db.READ = true;
  await global.db.read()["catch"](console.error);
  global.db.READ = null;
  global.db.data = {
    'users': {},
    'chats': {},
    'stats': {},
    'msgs': {},
    'sticker': {},
    'settings': {},
    ...(global.db.data || {})
  };
  global.db.chain = chain(global.db.data);
};
loadDatabase();
global.authFolder = "sessions";
const {
  state,
  saveCreds
} = await useMultiFileAuthState(global.authFolder);
const connectionOptions = {
  'version': [0x2, 0xbb8, 0x3c8d6c7b],
  'logger': _0x333424({
    'level': "fatal"
  }),
  'printQRInTerminal': !pairingCode,
  'browser': ["chrome (linux)", '', ''],
  'auth': {
    'creds': state.creds,
    'keys': makeCacheableSignalKeyStore(state.keys, _0x333424().child({
      'level': "fatal",
      'stream': "store"
    }))
  },
  'markOnlineOnConnect': false,
  'generateHighQualityLinkPreview': true,
  'getMessage': async _0x5668f4 => {
    let _0x542292 = jidNormalizedUser(_0x5668f4.remoteJid);
    let _0x2fdd03 = await store.loadMessage(_0x542292, _0x5668f4.id);
    return _0x2fdd03?.["message"] || '';
  },
  'patchMessageBeforeSending': _0xb9d0f => {
    const _0x99744e = !!(_0xb9d0f.buttonsMessage || _0xb9d0f.templateMessage || _0xb9d0f.listMessage);
    if (_0x99744e) {
      _0xb9d0f = {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': {
              'deviceListMetadataVersion': 0x2,
              'deviceListMetadata': {}
            },
            ..._0xb9d0f
          }
        }
      };
    }
    return _0xb9d0f;
  },
  'msgRetryCounterCache': msgRetryCounterCache,
  'defaultQueryTimeoutMs': undefined,
  'syncFullHistory': false
};
global.conn = makeWASocket(connectionOptions);
conn.isInit = false;
store?.["bind"](conn.ev);
if (pairingCode && !conn.authState.creds.registered) {
  let phoneNumber;
  if (!!global.pairingNumber) {
    phoneNumber = global.pairingNumber.replace(/[^0-9]/g, '');
    if (!Object.keys(PHONENUMBER_MCC).some(_0x161a76 => phoneNumber.startsWith(_0x161a76))) {
      console.log(_0x3a0015.bgBlack(_0x3a0015.redBright("Start with your country's WhatsApp code, Example : 92xxx")));
      process.exit(0x0);
    }
  } else {
    phoneNumber = await question(_0x3a0015.bgBlack(_0x3a0015.greenBright("Please type your WhatsApp number : ")));
    phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
    if (!Object.keys(PHONENUMBER_MCC).some(_0x3021fe => phoneNumber.startsWith(_0x3021fe))) {
      console.log(_0x3a0015.bgBlack(_0x3a0015.redBright("Start with your country's WhatsApp code, Example : 92xxx")));
      phoneNumber = await question(_0x3a0015.bgBlack(_0x3a0015.greenBright("Please type your WhatsApp number : ")));
      phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
      rl.close();
    }
  }
  setTimeout(async () => {
    let _0x1a5c1a = await conn.requestPairingCode(phoneNumber);
    _0x1a5c1a = _0x1a5c1a?.["match"](/.{1,4}/g)?.["join"]('-') || _0x1a5c1a;
    const _0x36d95c = _0x3a0015.bold.greenBright("Your Pairing Code:") + " " + _0x3a0015.bgGreenBright(_0x3a0015.black(_0x1a5c1a));
    console.log(_0x36d95c);
  }, 0xbb8);
}
conn.logger.info("\nWaiting For Login\n");
if (!opts.test) {
  if (global.db) {
    setInterval(async () => {
      if (global.db.data) {
        await global.db.write();
      }
      if (opts.autocleartmp && (global.support || {}).find) {
        tmp = [os.tmpdir(), "tmp"];
        tmp.forEach(_0xc79cfb => cp.spawn("find", [_0xc79cfb, "-amin", '3', '-type', 'f', "-delete"]));
      }
    }, 30000);
  }
}
if (opts.server) {
  (await import("./server.js"))["default"](global.conn, PORT);
}
function runCleanup() {
  _0x26195c().then(() => {
    console.log("Temporary file cleanup completed.");
  })["catch"](_0x5719c3 => {
    console.error("An error occurred during temporary file cleanup:", _0x5719c3);
  })['finally'](() => {
    setTimeout(runCleanup, 120000);
  });
}
runCleanup();
function clearsession() {
  let _0x2727c5 = [];
  const _0x25973c = readdirSync('./sessions');
  const _0x2d6812 = _0x25973c.filter(_0x40769b => {
    return _0x40769b.startsWith('pre-key-');
  });
  _0x2727c5 = [..._0x2727c5, ..._0x2d6812];
  _0x2d6812.forEach(_0xb7e31a => {
    unlinkSync("./sessions/" + _0xb7e31a);
  });
}
async function connectionUpdate(_0x26f30b) {
  const {
    connection: _0x29d4be,
    lastDisconnect: _0x50d5bf,
    isNewLogin: _0x202d13,
    qr: _0x4cc0ee
  } = _0x26f30b;
  global.stopped = _0x29d4be;
  if (_0x202d13) {
    conn.isInit = true;
  }
  const _0x3a2643 = _0x50d5bf?.['error']?.["output"]?.["statusCode"] || _0x50d5bf?.["error"]?.['output']?.["payload"]?.["statusCode"];
  if (_0x3a2643 && _0x3a2643 !== DisconnectReason.loggedOut && conn?.['ws']["socket"] == null) {
    try {
      conn.logger.info(await global.reloadHandler(true));
    } catch (_0x199371) {
      console.error("Error reloading handler:", _0x199371);
    }
  }
  if (_0x3a2643 && (_0x3a2643 === DisconnectReason.restartRequired || _0x3a2643 === 0x1ac)) {
    conn.logger.info(_0x3a0015.yellow("\n🚩 Restart Required... Restarting"));
    process.send("reset");
  }
  if (global.db.data == null) {
    loadDatabase();
  }
  if (!pairingCode && useQr && _0x4cc0ee !== 0x0 && _0x4cc0ee !== undefined) {
    conn.logger.info(_0x3a0015.yellow("\nLogging in...."));
  }
  if (_0x29d4be === "open") {
    const {
      jid: _0x7c31ed,
      name: _0x4aba5c
    } = conn.user;
    await conn.sendMessage(_0x7c31ed, {
      'text': "\nGAGA-MD\n\nʙᴏᴛ ɪs ᴏɴʟɪɴᴇ ɴᴏᴡ✅\nIғ ʏᴏᴜ ʟɪᴋᴇ ᴛʜᴇ ʙᴏᴛ ɢɪᴠᴇ ᴀ sᴛᴀʀ 🌟\n\nENJOY💌",
      'mentions': [_0x7c31ed]
    }, {
      'quoted': null
    });
    conn.logger.info(_0x3a0015.yellow("\n🚩 G A G A M D  I S  B O T  R E A D Y"));
  }
  if (_0x29d4be == "close") {
    conn.logger.error(_0x3a0015.yellow("\n🛰️connection closed... Get a New Session"));
  }
}
process.on('uncaughtException', console.error);
let isInit = true;
let handler = await import("./handler.js");
global.reloadHandler = async function (_0x35329f) {
  try {
    const _0x95dfea = await import('./handler.js?update=' + Date.now())["catch"](console.error);
    if (Object.keys(_0x95dfea || {}).length) {
      handler = _0x95dfea;
    }
  } catch (_0x315e99) {
    console.error;
  }
  if (_0x35329f) {
    const _0x10dbf4 = global.conn.chats;
    try {
      global.conn.ws.close();
    } catch {}
    conn.ev.removeAllListeners();
    global.conn = makeWASocket(connectionOptions, {
      'chats': _0x10dbf4
    });
    isInit = true;
  }
  if (!isInit) {
    conn.ev.off("messages.upsert", conn.handler);
    conn.ev.off("messages.update", conn.pollUpdate);
    conn.ev.off("group-participants.update", conn.participantsUpdate);
    conn.ev.off("groups.update", conn.groupsUpdate);
    conn.ev.off('message.delete', conn.onDelete);
    conn.ev.off("presence.update", conn.presenceUpdate);
    conn.ev.off('connection.update', conn.connectionUpdate);
    conn.ev.off("creds.update", conn.credsUpdate);
  }
  conn.welcome = " Hello @user!\n\n🎉 *WELCOME* to the group @group!\n\n📜 Please read the *DESCRIPTION* @desc.";
  conn.bye = "👋GOODBYE @user \n\nSee you later!";
  conn.spromote = "*@user* has been promoted to an admin!";
  conn.sdemote = "*@user* is no longer an admin.";
  conn.sDesc = "The group description has been updated to:\n@desc";
  conn.sSubject = "The group title has been changed to:\n@group";
  conn.sIcon = "The group icon has been updated!";
  conn.sRevoke = " The group link has been changed to:\n@revoke";
  conn.sAnnounceOn = "The group is now *CLOSED*!\nOnly admins can send messages.";
  conn.sAnnounceOff = "The group is now *OPEN*!\nAll participants can send messages.";
  conn.sRestrictOn = "Edit Group Info has been restricted to admins only!";
  conn.sRestrictOff = "Edit Group Info is now available to all participants!";
  conn.handler = handler.handler.bind(global.conn);
  conn.pollUpdate = handler.pollUpdate.bind(global.conn);
  conn.participantsUpdate = handler.participantsUpdate.bind(global.conn);
  conn.groupsUpdate = handler.groupsUpdate.bind(global.conn);
  conn.onDelete = handler.deleteUpdate.bind(global.conn);
  conn.presenceUpdate = handler.presenceUpdate.bind(global.conn);
  conn.connectionUpdate = connectionUpdate.bind(global.conn);
  conn.credsUpdate = saveCreds.bind(global.conn, true);
  const _0x4cf220 = new Date();
  const _0x2a5bb1 = new Date(conn.ev);
  if (_0x4cf220 >= _0x2a5bb1) {} else {}
  conn.ev.on("messages.upsert", conn.handler);
  conn.ev.on('messages.update', conn.pollUpdate);
  conn.ev.on("group-participants.update", conn.participantsUpdate);
  conn.ev.on("groups.update", conn.groupsUpdate);
  conn.ev.on("message.delete", conn.onDelete);
  conn.ev.on("presence.update", conn.presenceUpdate);
  conn.ev.on('connection.update', conn.connectionUpdate);
  conn.ev.on("creds.update", conn.credsUpdate);
  isInit = false;
  return true;
};
const pluginFolder = global.__dirname(join(__dirname, './plugins/index'));
const pluginFilter = _0x359807 => /\.js$/.test(_0x359807);
global.plugins = {};
async function filesInit() {
  for (const _0x14d767 of readdirSync(pluginFolder).filter(pluginFilter)) {
    try {
      const _0x49b696 = global.__filename(join(pluginFolder, _0x14d767));
      const _0x5f1503 = await import(_0x49b696);
      global.plugins[_0x14d767] = _0x5f1503["default"] || _0x5f1503;
    } catch (_0x2ab4eb) {
      conn.logger.error(_0x2ab4eb);
      delete global.plugins[_0x14d767];
    }
  }
}
filesInit().then(_0x588d9a => Object.keys(global.plugins))["catch"](console.error);
global.reload = async (_0xebaa62, _0x5e1619) => {
  if (/\.js$/.test(_0x5e1619)) {
    const _0x59701b = global.__filename(join(pluginFolder, _0x5e1619), true);
    if (_0x5e1619 in global.plugins) {
      if (existsSync(_0x59701b)) {
        conn.logger.info("\nUpdated plugin - '" + _0x5e1619 + "'");
      } else {
        conn.logger.warn("\nDeleted plugin - '" + _0x5e1619 + "'");
        return delete global.plugins[_0x5e1619];
      }
    } else {
      conn.logger.info("\nNew plugin - '" + _0x5e1619 + "'");
    }
    const _0x314ac3 = _0xe61257(readFileSync(_0x59701b), _0x5e1619, {
      'sourceType': "module",
      'allowAwaitOutsideFunction': true
    });
    if (_0x314ac3) {
      conn.logger.error("\nSyntax error while loading '" + _0x5e1619 + "'\n" + format(_0x314ac3));
    } else {
      try {
        const _0x25a1c8 = await import(global.__filename(_0x59701b) + "?update=" + Date.now());
        global.plugins[_0x5e1619] = _0x25a1c8["default"] || _0x25a1c8;
      } catch (_0x56913a) {
        conn.logger.error("\nError require plugin '" + _0x5e1619 + "\n" + format(_0x56913a) + "'");
      } finally {
        global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([_0x55e834], [_0x403951]) => _0x55e834.localeCompare(_0x403951)));
      }
    }
  }
};
Object.freeze(global.reload);
watch(pluginFolder, global.reload);
await global.reloadHandler();
async function _quickTest() {
  const _0x5c199f = await Promise.all([spawn("ffmpeg"), spawn("ffprobe"), spawn("ffmpeg", ['-hide_banner', "-loglevel", "error", "-filter_complex", "color", "-frames:v", '1', '-f', "webp", '-']), spawn("convert"), spawn('magick'), spawn('gm'), spawn("find", ["--version"])].map(_0x101291 => {
    return Promise.race([new Promise(_0x15a839 => {
      _0x101291.on("close", _0x24034f => {
        _0x15a839(_0x24034f !== 0x7f);
      });
    }), new Promise(_0x5bcc72 => {
      _0x101291.on("error", _0x13168d => _0x5bcc72(false));
    })]);
  }));
  const [_0x5b1b2a, _0x55813c, _0x54f817, _0x29c4a2, _0x530fec, _0x3285c6, _0x34e7d9] = _0x5c199f;
  Object.freeze(global.support);
}
async function saafsafai() {
  if (stopped === "close" || !conn || !conn.user) {
    return;
  }
  clearsession();
  console.log(_0x3a0015.cyanBright("\nStored Sessions Cleared"));
}
setInterval(saafsafai, 600000);
_quickTest()["catch"](console.error);