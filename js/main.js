// header
import { buildHeader } from "../partials/header.js";
import {buildRecipes} from "./recipes.js";


window.addEventListener('DOMContentLoaded', () => {
    const mainHeader = document.getElementById('main-header');

    buildHeader(mainHeader);
    buildRecipes();
})


