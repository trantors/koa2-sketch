/**
 * Created by silver on 16/9/3.
 */
import log4js from 'log4js';
import path from 'path';

log4js.configure({
    appenders: [
        {type: 'console', category: 'console'},
        {type: 'dateFile', filename: path.join(__dirname, '../../logs/date-log'), 'pattern': '-yyyy-MM-dd.log', 'alwaysIncludePattern': true, category: 'file'},
        {type: 'dateFile', filename: path.join(__dirname, '../../logs/trans-log'), 'pattern': '-yyyy-MM.log', 'alwaysIncludePattern': true, category: 'tans'}
    ],
    replaceConsole: true
});

const CSL = log4js.getLogger('console');
const LOG = log4js.getLogger('file');
const LOG_TRANS = log4js.getLogger('trans');

if (process.env.NODE_ENV == 'development') {
    LOG.setLevel('DEBUG');
} else {
    LOG.setLevel('ERROR');
}

LOG.debug('Log4J configured!');

module.exports = {
    CSL,
    LOG,
    LOG_TRANS
};
