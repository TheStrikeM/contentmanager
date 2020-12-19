function contentChange(head, buttons, tabcontent) {
   
    // TabContent Manager by TheStrikeM
    // Github, Instagram, Telegram - @thestrikem

    // Fix loading time  
    window.addEventListener('DOMContentLoaded', function () {

        let header = document.querySelector(head),
            btns = document.querySelectorAll(buttons),
            contents = document.querySelectorAll(tabcontent);

        console.log(header);
        console.log(btns);
        console.log(contents);

        // Hide tab content function
        function hideContent(a) {
            for (let i = a; i < contents.length; i++) {
                const content = contents[i];
                content.classList.add("hide");
                content.classList.remove("show");
            }
        }

        // Show tab content function
        function showContent(b) {
            if (contents[b].classList.contains("hide")) {
                contents[b].classList.add("show");
                contents[b].classList.remove("hide");   
            }
        }

        hideContent(1);

        // Binding events to a button
        header.addEventListener('click', function(e) {
            const target = e.target;

            for (let i = 0; i < btns.length; i++) {
                const btn = btns[i];
                if (target == btn) {
                    hideContent(0);
                    showContent(i);
                }
            }
        });

    });
}