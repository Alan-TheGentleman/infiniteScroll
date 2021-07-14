import { Injectable } from '@angular/core';
@Injectable()
export class SharingService {
  constructor() {}

  static downloadFile(path: string, fileName: string) {
    // <a href="http://localhost:4200/assets/shape-up.pdf" target="_blank" download="Shape Up"></a>
    const downloadInstance = document.createElement('a');
    downloadInstance.href = path;;
    downloadInstance.target = '_blank';
    downloadInstance.download = fileName;

    document.body.appendChild(downloadInstance);
    downloadInstance.click();
    document.body.removeChild(downloadInstance);
  }
}
