let brower = prompt("trinh duyet dang dung")

switch (brower) {
    case 'Edge' :
        alert("you've got the Edge!");
        break;
    case 'chrome':
    case 'firefox':
    case 'safari':
    case 'opera':
        alert('Okay we support these browsers too');
        break;
    default:
        alert('We hope that this page looks ok!');

}