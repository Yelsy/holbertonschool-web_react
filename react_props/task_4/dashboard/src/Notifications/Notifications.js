import React from "react";
import "./Notifications.css";
import close from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";

export const Notifications = ({ displayDrawer = false }) => {
  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div className="Notifications">
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem
              type="urgent"
              html={{ __html: getLatestNotification() }}
            />
          </ul>
          <button
            style={{
              color: "#3a3a3a",
              fontWeight: "bold",
              background: "none",
              border: "none",
              fontSize: "15px",
              position: "absolute",
              right: "3px",
              top: "3px",
              cursor: "pointer",
            }}
            aria-label="Close"
            onClick={() => console.log("Close button has been clicked")}
          >
            <img src={close} alt="close.png" />
          </button>
        </div>
      )}
      ;
    </>
  );
};
Notifications.propTypes = {
  displayDrawer: PropTypes.bool.isRequired,
};