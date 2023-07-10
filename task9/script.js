const container = document.getElementById("container");
    
    function generateBlocks() {
      for (let i = 0; i < 5; i++) {
        const row = document.createElement("div");
        row.className = "row";

        for (let j = 0; j < 5; j++) {
          const square = document.createElement("div");
          square.className = "square";
          square.style.backgroundColor = getRandomColor();
          row.appendChild(square);
        }

        container.appendChild(row);
      }
    }

    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";

      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }

      return color;
    }

    function generateBlocksInterval() {
      generateBlocks();
      setInterval(changeColors, 1000);
    }

    function changeColors() {
      const squares = document.getElementsByClassName("square");

      for (let square of squares) {
        square.style.backgroundColor = getRandomColor();
      }
    }

    generateBlocksInterval();