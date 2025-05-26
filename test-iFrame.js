<!-- Claudia Widget with GIF and Fullscreen Iframe -->
<style>
  #claudia-launcher {
    position: fixed;
    bottom: 20px;
    left: 20px;
    z-index: 9999;
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 30px;
    padding: 6px 12px 6px 6px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  #claudia-launcher:hover {
    transform: scale(1.05);
  }

  #claudia-launcher img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  #claudia-launcher span {
    font-size: 14px;
    font-weight: bold;
    color: #333;
  }

  #claudia-iframe-wrapper {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10000;
    background: white;
  }

  #claudia-iframe-wrapper iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  #claudia-close-btn {
    position: absolute;
    top: 20px;
    right: 30px;
    background: rgba(0,0,0,0.6);
    color: white;
    border: none;
    font-size: 20px;
    padding: 8px 14px;
    border-radius: 5px;
    cursor: pointer;
    z-index: 10001;
  }

  #claudia-close-btn:hover {
    background: rgba(0,0,0,0.8);
  }
</style>

<!-- Widget with GIF and Text -->
<div id="claudia-launcher" onclick="openClaudia()">
  <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXkzZmZ2b25tczVqMnUwNTNmb3N1eHE2bnR4eTk5dWhjdDZpdHV0cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iunm6mcbCzSgWGzcbo/giphy.gif" alt="Claudia GIF">
  <span>💬 Dile Hola a Claudia</span>
</div>

<!-- Fullscreen Iframe -->
<div id="claudia-iframe-wrapper">
  <button id="claudia-close-btn" onclick="closeClaudia()">❌</button>
  <iframe src="https://theaihumans.com/Claudia-KFC-IA.html" title="Claudia KFC IA"></iframe>
</div>

<!-- JS Logic -->
<script>
  function openClaudia() {
    document.getElementById('claudia-iframe-wrapper').style.display = 'block';
  }

  function closeClaudia() {
    document.getElementById('claudia-iframe-wrapper').style.display = 'none';
  }
</script>
