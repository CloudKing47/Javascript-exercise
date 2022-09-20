var str="megh patil"

const splitStr=str.split(' ');

splitStr.map((item)=> {

    const ss=item.split('').pop()
    console.log("🚀 ~ file: reverseStringWithoufBuildFun.js ~ line 8 ~ splitStr.map ~ ss", ss)
})