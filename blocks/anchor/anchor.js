export default function decorate(block) {   
    const div = document.createElement('div');
    div.className = 'anchor-test';
    div.textContent = 'Anchor Test';   
    block.textContent = '';
    block.append(div);
  }