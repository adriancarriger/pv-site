import { SafeHtmlPipe } from './safe-html.pipe';

describe('SafePipe', () => {
  it('create an instance', () => {
    const mockDomSanitizer = new MockDomSanitizer();
    const pipe = new SafeHtmlPipe(<any>mockDomSanitizer);
    const result = pipe.transform('my-string');
    expect(result).toBe('my-string-my-string');
  });
});

export class MockDomSanitizer {
  bypassSecurityTrustHtml(value) {
    return `${value}-${value}`;
  }
}
