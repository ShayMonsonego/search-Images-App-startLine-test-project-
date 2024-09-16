
document.addEventListener('DOMContentLoaded', function() {


        //divs
        const imageBoxContainer = document.getElementById('imageBoxContainer');
        const item = document.getElementById('item');
        const model = document.getElementById('modelId');
        const searchImageInput = document.getElementById('searchImageInput');


        //buttons
        const searchMainButton = document.getElementById('searchMainButton');
        const addTofavoriteButton = document.getElementById('addTofavoriteButton');
        const closeModelButton = document.getElementById('closeButton');
        const loadMoreButton = document.getElementById('loadMoreButton');
        const  displayFavoriteButton = document.getElementById('displayFavoriteButton');


        const catagoryButtons = document.querySelectorAll('.catagoryBtn');


        //my variabels
        let favoriteImagesArray = [];
        let currentPage = 1;
        const resultsPerPage = 30;
        let myData = null;
        let flag = 0;
        let inputText;
        let indexOfItems = 0;
        let modalImage;


        //my data structer
        const catagories = {
            animals: "animals",
            travels: "travels",
            flags: "flags",
            sport: "Sport",
            food: "Food"
        };


        async function fetchData(query, page, perPage)
        {
            const apiKey = '45827747-c112eab64f62320ccc9cbb9f9';
            const encodedQuery = encodeURIComponent(query);

            try
            {
                const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${encodedQuery}&page=${page}&per_page=${perPage}`);

                if (!response.ok)
                {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log(data); // הדפס את הנתונים שנאספו כדי לבדוק אותם
                return data;
            }

            catch (error)
            {
                console.error('Error fetching data:', error.message);
                console.error('Stack trace:', error.stack);
                return null;
            }
        }


        function addToFavorite(favoriteImages, item) {
            if (item)
            {
                if (!favoriteImages.some(favorite => favorite.id === item.id))
                {
                    favoriteImages.push(item);
                    alert("The image has been added to your favorites successfully! Feel free to continue exploring the app.");
                    hideClass(model);
                    //console.log(`Image added to favorites - you have: ${favoriteImages.length} images in your favorite`);
                }
                else
                {

                    alert("The image is already in favorites try adding another one");
                    //console.log("The image is already in favorites.");
                }

            }
            else
            {
                console.log("Please try adding the image again.");
            }

            //console.log(favoriteImages);
        }


        function showClass(element)
        {
            element.style.display = 'block';
        }

        function hideClass(element)
        {
            element.style.display = 'none';
        }

        function isEnglish(text)
        {
            return /^[A-Za-z0-9\s]+$/.test(text);
        }



        function getRandomTitleFragment(title) {
            const fragments = title.split(',').filter(Boolean);
            return fragments[Math.floor(Math.random() * fragments.length)].trim();
        }


        function createImageBox(element,index)
        {
            const imageBox = document.createElement('div');
            imageBox.className = 'imageResultBox';

            const img = document.createElement('img');
            img.src = element.webformatURL;
            img.alt = element.tags;

            const title = document.createElement('h3');
            title.textContent = getRandomTitleFragment(element.tags);

            const description = document.createElement('p');
            description.textContent = `Views: ${element.views} | Downloads: ${element.downloads} | Likes: ${element.likes} | Comments: ${element.comments}`;

            const imageResult = document.createElement('div');
            imageResult.className = 'imageResult';

            const readMoreButton = document.createElement('button');
            readMoreButton.textContent = 'Zoom In';
            readMoreButton.className = 'ganeralBtn';
            readMoreButton.dataset.index = index;
            readMoreButton.dataset.id = element.id; // Use a unique data attribute


            readMoreButton.addEventListener ('click', function (){
                updateModalContent(element,index);
                showClass(model);
            });


            closeModelButton.addEventListener('click', function () {
                hideClass(model);
            });


            imageResult.appendChild(title);
            imageResult.appendChild(description);
            imageResult.appendChild(readMoreButton);

            imageBox.appendChild(img);
            imageBox.appendChild(imageResult);

            return imageBox;

        }





        function resetDiv(element) {
            element.innerHTML = ""
        }



        function resultNotFound(massage) {
            resetDiv(item);
            const noResultsMessage = document.createElement('h2');
            noResultsMessage.textContent = massage;
            item.appendChild(noResultsMessage);

        }



        function displayImages(myData, flag)
        {
            if (flag == 0)
            {
                resetDiv(item);

            }

            if (myData.hits.length == 0)
            {
                resultNotFound('No results found. Please try searching for something else.');
                hideClass(loadMoreButton);
                showClass(imageBoxContainer);
                return;
            }

            else
            {
                myData.hits.forEach(element => {
                    const imageBox = createImageBox(element,indexOfItems);
                    item.appendChild(imageBox);
                    indexOfItems+=1;
                    //console.log('index of items  loops');
                    //console.log(indexOfItems);
                });

                showClass(imageBoxContainer);
                showClass(loadMoreButton);
                indexOfItems = 0;
            }

            //console.log("indexOfItems after the loops");
            //console.log(indexOfItems);

        };

        function updateModalContent(element,index) {

            modalImage = document.querySelector('#modelId img');
            const modalTitle = document.querySelector('#modelId h3');
            const modalDescription = document.querySelector('#modelId p');

            modalImage.src = element.webformatURL;
            modalImage.alt = element.tags;
            modalTitle.textContent = element.tags;
            modalImage.dataset.index = index;

            //console.log("index updateModalContent");
            //console.log(index);
            //console.log(" modalImage.dataset.index current");
            //console.log(modalImage.dataset.index);

            modalDescription.textContent = `Views: ${element.views} | Downloads: ${element.downloads} | Likes: ${element.likes} | Comments: ${element.comments}`
        }

        function displayFavoriteImages(favoriteArray) {
            resetDiv(item);
            hideClass(loadMoreButton);

            if (favoriteArray.length == 0) {
                alert('your dont add a favorite......please search your favorite and dont forget adding to favorite!');
                return;
            }

            favoriteArray.forEach(element => {
                const imageBox = createImageBox(element);
                item.appendChild(imageBox);
            });

            showClass(imageBoxContainer);
        }


        //events
        searchMainButton.addEventListener('click', async function () {
            inputText = searchImageInput.value.trim();
            myData = null;
            flag = 0;
            currentPage = 1;

            try {
                if (!isEnglish(inputText)) {
                    alert("Currently, searches can only be made in English. Please enter your query in English.");
                    resetDiv(item);
                    hideClass(loadMoreButton);
                    return;

                }

                myData = await fetchData(inputText, currentPage, resultsPerPage);
                console.log(inputText);
                displayImages(myData, flag);


            } catch (error) {
                console.error('Error:', error);

            }

            console.log(favoriteImagesArray);

        });



        loadMoreButton.addEventListener('click', async function () {
            if (!myData || myData.hits.length === 0) {
                resetDiv(item)
                alert('No data available. Please perform a search first.');
                return;
            }

            try {
                currentPage += 1;
                flag = 1;
                myData = await fetchData(inputText, currentPage, resultsPerPage);
                displayImages(myData, flag);
            } catch (error) {
                console.error('Error:', error);

            }

        });


        //catagoris
        catagoryButtons.forEach(button => {
            button.addEventListener('click', async function () {

                const catagoryName = button.getAttribute('data-category');

                inputText = catagories[catagoryName];
                //console.log(inputText);

                myData = null;
                flag = 0;
                currentPage = 1;

                myData = await fetchData(inputText, currentPage, resultsPerPage);
                //console.log(myData);

                displayImages(myData, flag);
            });
        });




        addTofavoriteButton.addEventListener("click", function () {
            let itemIndex = parseInt(modalImage.dataset.index, 10);
            //console.log(modalImage.dataset.index);

            addToFavorite(favoriteImagesArray, myData.hits[itemIndex]);
        });



        displayFavoriteButton.addEventListener('click', async function ()
        {
                try
                {
                    displayFavoriteImages(favoriteImagesArray);
                }
                catch (error)
                {
                    console.error('Error:', error);

                }

        });


});


