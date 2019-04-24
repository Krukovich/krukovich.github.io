'use strict'

import main from "../css/main.css";
import link from "../css/link.css";
import controller from "../src/controller/controller";
import showUserPhotos from "../src/controller/controllerPhotos";
import selectFriend from "../src/controller/selectFriend";
import showUserNews from "../src/controller/showUserNews";

controller();
selectFriend();
showUserPhotos();
showUserNews();



