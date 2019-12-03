import {expect} from 'chai';  //chai is an assertion library and expect is the style.
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test',()=>{
    it('should pass',()=>{
        expect(true).to.equal(true); // this is the assertion
    });
});

// Below is the first JSDOM test

describe('index.html',()=>{
    it('should say hello', (done)=>{ // add this done whenever u want the asynchronous testing
    const index = fs.readFileSync('./src/index.html',"utf-8"); //this is the reference of the index.html file held in the memory.
    jsdom.env(index, function(err, window){
        // here window is the object in the browser.
        const h1 = window.document.getElementsByTagName('h1')[0]; // here we have the reference of the 1st H1 of the page
        expect(h1.innerHTML).to.equal("Hello World!");
        done();
        window.close(); // freeing up the memory


    });
    });
});
