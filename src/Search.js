import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-form">
        <div className="row">
          <div className="col-1">
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter City"
              id="search-input"
              autoComplete="off"
            ></input>
          </div>
          <div className="col-2">
            <button
              type="submit"
              className="btn btn-primary btn-rounded btn-icon"
              id="search-button"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
