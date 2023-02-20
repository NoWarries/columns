export class HtmlService {
  format(html: string): string {
    let result = '';
    let indent = '';

    html.split(/>\s*</).forEach(function (element) {
      if (element.match(/^\/\w/)) {
        indent = indent.substring('\x09'.length);
      }

      if (element.startsWith('svg')) {
        result +=
          indent +
          '<!-- Icon/Image goes here (css or classes may apply --> \n' +
          indent +
          '<!-- This projecty uses https://tabler-icons.io/ (MIT) --> \r\n';
      }

      result += indent + '<' + element + '>\r\n';

      if (element.match(/^<?\w[^>]*[^/]$/) && !element.startsWith('input')) {
        indent += '\x09';
      }
    });

    return result.substring(1, result.length - 3);
  }
}
