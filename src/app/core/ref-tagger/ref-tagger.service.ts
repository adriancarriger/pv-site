import { Injectable } from '@angular/core';

@Injectable()
export class RefTaggerService {
   initCalled = false;
   refTagger = {
    settings: {
      bibleVersion: 'ESV',
      socialSharing: [],
      noSearchTagNames: ['h1', 'h2'],
      noSearchClassNames: ['no-ref']
    }
  };
  constructor() { }

  tag() {
    if (window['refTagger'] && 'tag' in window['refTagger']) {
      window['refTagger'].tag();
    } else if (!this.initCalled ) {
      setTimeout(() => {
        this.init();
      }, 1000);
    }
  }

  init() {
    this.initCalled = true;
    // Config
    window['refTagger'] = this.refTagger;
    // Download script
    const t = 'script';
    const g = document.createElement(t);
    const s = document.getElementsByTagName(t)[0];
    g.src = '//api.reftagger.com/v2/RefTagger.js';
    s.parentNode.insertBefore(g, s);

    setTimeout(() => this.tag(), 500);
  }
}


