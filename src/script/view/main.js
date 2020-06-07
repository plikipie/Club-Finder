import "../component/club-list.js";
import "../component/search-bar.js";
import DataSource from "../data/data-source.js";

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const clubListElement = document.querySelector("club-list");

    // KODE AWAL
    const onButtonSearchClicked = async() => {
        try {
            const result = await DataSource.searchClub(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };
    // TODO : KODE DIBAWAH INI APABILA MEMAKAI PROMISE STATIC
    //   const onButtonSearchClicked = () => {
    //     DataSource.searchClub(searchElement.value)
    //         .then(renderResult)
    //         .catch(fallbackResult)
    // };

    //TODO: BISA JUGA MENGGUNAK0AN ASYNC / AWAIT (PROMISE STATIC)
    //   const onButtonSearchClicked = async () => {
    //     try{
    //         const result = await DataSource.searchClub(searchElement.value);
    //         renderResult(result);
    //     } catch (    message) {
    //         fallbackResult(message)
    //     }
    //  };]
    const renderResult = (results) => {
        clubListElement.clubs = results;
    };

    const fallbackResult = (message) => {
        clubListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;