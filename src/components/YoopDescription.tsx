import React from "react";

function YoopDescription() {
  return (
    <div>
      <p style={{ fontSize: "14px", marginTop: "10px" }}>
        YOOP is a mobile web app designed to help users schedule sports fields
        and connect with other players.
      </p>
      <div
        style={{
          fontSize: "12px",
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <div className="yoop-users">
          <span style={{ fontWeight: "bold" }}>
            trial users can access the app:
          </span>
          <span>Ido@user.com | Password: Aa123456! | Role: Player </span>
          <span>
            Ido@manager.com | Password: Aa123456! | Role: Field Manager{" "}
          </span>
          <span>Ido@admin.com | Password: Aa123456! | Role: Admin </span>
        </div>
      </div>
      <a className="app-nav" href="https://yoop.fun">
        Go to YOOP
      </a>
    </div>
  );
}

export default YoopDescription;
