## About PriceIt | Frontend
Please refer to [PriceIT Backend](https://github.com/aaronalayo/priceit-backend) for more information about the project.

This Repo contains the frontend of our BA project - PriceIt.


### Built With

This project is built with the following tools


* [![React][React.js]][React-url]
* [![MaterialUI][MaterialUI]][Material-url]
* [![Vite][ViteLogo]][Vite-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Getting Started
Use the guide below to run the application locally. Remember to also setup the AUTH and SEARCH services in order for the application to function properly.
### Prerequisites

Following criterias are needed:
- Docker installed
- [PriceIT | AUTH API](https://github.com/aaronalayo/priceit_auth)
- [PriceIT | SEARCH API](https://github.com/aaronalayo/priceit-backend)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ``` 
2. Fill out the .env template
    ```variables
    LOCAL_SERVER_PORT=
    DOCKER_SERVER_PORT=
    VITE_SEARCH_BASE_URL=
    VITE_AUTH_BASE_URL=
    ```
 
3. Spin up the container
   ```sh
   $ docker-compose up
   ```
4. Access the site
   ```
    http://localhost:<DOCKER_SERVER_PORT>
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Project Services / Repositories

Project Links: 
- [PriceIT | AUTH API](https://github.com/aaronalayo/priceit_auth)
- [PriceIT | SEARCH API](https://github.com/aaronalayo/priceit-backend)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[MaterialUI]: https://img.shields.io/badge/MaterialUi-UI%20Components-blue
[Material-url]: https://mui.com/material-ui/
[ViteLogo]: https://img.shields.io/badge/Vite-Frontend%20Tooling-green
[Vite-url]: https://vitejs.dev/
