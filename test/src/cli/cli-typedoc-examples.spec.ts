import * as chai from 'chai';
import {temporaryDir, shell, pkg, exists, exec, read, shellAsync} from '../helpers';
const expect = chai.expect,
      tmp = temporaryDir(),
      tsconfigPath = require.resolve('../../../tsconfig.json'),
      env = Object.freeze({TS_NODE_PROJECT: tsconfigPath, MODE:'TESTING'});

describe('CLI generation - TypeDoc examples', () => {

      let stdoutString = null,
          clockInterfaceFile,
          searchFuncFile;
      before(function (done) {
          let ls = shell('node', [
              './bin/index-cli.js',
              '-p', './test/src/typedoc-examples/tsconfig.json'], { env});

          if (ls.stderr.toString() !== '') {
              console.error(`shell error: ${ls.stderr.toString()}`);
              done('error');
          }
          stdoutString = ls.stdout.toString();
          clockInterfaceFile = read(`documentation/interfaces/ClockInterface.html`);
          searchFuncFile = read(`documentation/interfaces/SearchFunc.html`);
          done();
      });
      //after(() => tmp.clean('documentation'));

      it('should display generated message', () => {
          expect(stdoutString).to.contain('Documentation generated');
      });

      it('interfaces - INameInterface', () => {
          const file = read(`documentation/interfaces/INameInterface.html`);
          expect(file).to.contain('This is a simple interface.');
          expect(file).to.contain('This is a interface function of INameInterface.');
          expect(file).to.contain('This is a interface member of INameInterface.');
      });

      it('interfaces - IPrintNameInterface', () => {
          const file = read(`documentation/interfaces/IPrintNameInterface.html`);
          expect(file).to.contain('This is a interface inheriting from two other interfaces.');
          expect(file).to.contain('This is a interface function of IPrintNameInterface');
          expect(file).to.contain('Extends');
      });

      it('classes - BaseClass', () => {
          const file = read(`documentation/classes/BaseClass.html`);
          expect(file).to.contain('This is a simple base class.');
          expect(file).to.contain('Implements');
          expect(file).to.contain('This is a private function.');
      });

});
