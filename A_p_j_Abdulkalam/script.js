
    // Function to toggle the visibility of the awards section
    function toggleAwards() {
        const awardsSection = document.querySelector('.awards');
        const btn = document.getElementById('toggleButton');
        
        if (awardsSection.style.display === 'none' || awardsSection.style.display === '') {
            awardsSection.style.display = 'block';
            btn.textContent = 'Hide Awards';
        } else {
            awardsSection.style.display = 'none';
            btn.textContent = 'Show Awards';
        }
    }
    
    // Run the function when the window loads to ensure default display
    window.onload = function() {
        // Initially hide the awards section
        const awardsSection = document.querySelector('.awards');
        const btn = document.createElement('button');
        
        // Add button below the bio (before the awards section)
        btn.textContent = 'Hide Awards';
        btn.id = 'toggleButton';
        btn.style.marginTop = '20px';
        btn.style.cursor = 'pointer';
        btn.onclick = toggleAwards;
        
        // Insert button into the DOM
        const topSection = document.querySelector('.top1');
        topSection.insertAdjacentElement('afterend', btn);
    }

