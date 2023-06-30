import React, { useState } from "react";
import FeedIcon from "@mui/icons-material/Feed";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ListIcon from "@mui/icons-material/List";
import { useLocation, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

function Nav() {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  return (
    <div className="nav w-full flex font-extrabold h-fit p-2 shadow-lg ">
      <div className="logo w-2/7 p-3">
        <img
          className="h-9 rounded-full "
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAAB7CAMAAADNA9uJAAAAllBMVEX////xWyuVGh2OAADxVB7wRADwSQDxWSj1j3XxVyTwTQzNpqb4t6n0i3D8+fmVGBuTDhPm1NStYmL3rZvKnJyqWFmkTE371s7729P2nIW4eXr+9fP96OTwURf6zMLzeFfyZTv0g2bfxMSSBgz5xbnyakP3pJDyck7Dj5Dx5eX5vrDvNgDWs7S0bG2cLjCgOjy+hISYJCa8POEtAAAGGUlEQVR4nO2Yf3OyOBDHQ4EAKSKWtqAk/KgK1bZP2/f/5m6zGxDt3I0+c+d5c/n+0YGQLB82m92tjFlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWf3j2r2gdnD1/vHr+/PrBYcX98+/vp9fF4y9PpEWNP0Zbx52V4W8d1GP7P7TddM0dd2vhO1WrrvWN+sV28ElyH3A6Su6WV2VESDvQO79qzu/I7mrxXq4mQMbzbhztYt36RxHr+tIg5A+pwMj3Hyn4/Wd+84+8TZ9Shh7pE96vS7j4Kf5HPZ8bdyHN8aZ6TN7oUvATb7Rkd9XduQAmf663y0+XEOZfi12r3eINv+1Y184Pl8PsXFtR5r3zufonJUJv3t9805PvhcsMa58fEr/FUcOzqHjusDITD8TfZNgLM7vIPcMG54ePiHP2ra4MuQjQeIW4xEByOcRkj2440maz+G+XCrhRTcGuRsTlD4/LOmF4zhic1uQJvfgaYeHnQJGx1smtwVJAWocKVWgIR2xvC1ItjCp6hOu99wheX3dxTcE+eKOjjS7rRV5vL4dSLPda2wzDpCA2d4O5Puky2AbfoBU14jLMyGnjmRlFBwgq5uBNCVyTfHJMjEyXmO3ATLV3a2BTLHVHSD1o3W6wMtJ4wuqzYYrR14D8v3pAfT0TpAPqC+CXOHNB0AuPlZaH2NnkXSRUJ7w2vIajL8tuQ/DrLhWyZm+ePCLzKuqKk68pAdz+RdYBTw/WlPCCCw5NXIydIY2fQ3q9yyJe4eqR9U2kRDK2S4PxpJ93URKRU3f4aCchVoZ63D9NmdV7SgVbLMRU3ZbRwnhNe1+GNKWlQAr9WV1KuYRiGdwFiKVadtwQRkmUH5mHJc3ZjAAfP3OwvdAYsZCpdf7VezjhIBvzZd1QgVmCe9xrGxHyxGvL4nmGLOJiJdQRTyAzB3vkKkdoMBJKjqMBfBFAIm1GyBxuheOq7xevz6ZiYkZz4HWM2knhcpRl5RTgvRm+iUAKSPE8XyfR0SPbjMOMDlcFaeQgBEMGV50sCQU9D2+T13dFgKLhnyfrKkLulGCdAgtYy05ZibLqtdjgSdZ2ZMfVdNQjwZsp5CO6tsteSqA3Fnh46jZlHKJE3jMan0RNJIVjQcRomYXQ2ocxTOJSTrCrZAmEFhFU1QmZWUayeQUUmVlUnZm4oa1+FkBlswwIpPoaS+Ekf22B7Xn568BUjXLOC6W6AxOsT8z1jEUHNXhdF+A3orTmKTqaGYuJe1xiIP4jeBeh3Z5uSkurlIG0gvxtNW07UtUj8d1yxq07tMJzVDyBJJTgO0JbkZtUtSjGfxWR+W18bkKmm0bX1SqCDJq0PfllrbTU1q0ZY2kMf9o2SkkOSePKFoyis4IzRCb2Iz9PBzAiHuXZEqCpL0cIScKmuJ8SJoa1dOu2EjESTvNSgHvLoUU2REkZI5R6hxI/9iTBtKbmHnLWBn6HM51MFCev+NHkIySDT+ObGcSk0mmwyzMTz1JlS8eYpKS7w9fJZtuVjeCMho/P1EeQ86mx6CUpRYlOAdrJpMYrn51AklJy5w71RUU6KYhRitlQtaSUub9oU78DiQlYZ1x9d7jPjlQ3nHQ2ejyi77yyx95MizKIjR5cm/SP31X9obbvXkzuw5vQYNi/+dUfwlprEfOMu56fD0UOUk5KIr6uhn89qPieE5jqr6uOOa7vDaLKQMF26Qh05UsyOH++T8lHUOynFPnohsqeg84de8TyBD0ovoBGY2F3cFja0ok9Ez03I9Zxs2h5MYRZzOeQrK9N2l4INNhZVuKaWrSFKcVZ3bogrAJk/U03zi6UJdHXVAgLvg3c+wnB+XeoesTkbEU+2roJ6HJZNgYgdR4uqvOJ//whjJLOeOTJfjTluwPlhU/PyKhgapbUD1NB5tZozjnqpkdzl+ZtYHgXDg1td4FtERN44QjJNu0sMjrD0sk1FWOS7ohpVXhVlsWQd1d9h9cgjoek7LIC3mcLUsYg0FjPJGo8gAJQ0Uuyx9L5NGYlPnp0BV0gLxhWci/S/8JyNaH48rfrvYb/+8pGf9YWVlZWVlZWVlZWVlZWVlZWVlZWVlZWf3f9AfpKIbosAZG6AAAAABJRU5ErkJggg=="
          alt=""
        />
      </div>
      <div className="profile w-full flex justify-around p-2">
        <div
          onClick={() => {
            navigate("/");
          }}
          className={`feeds hover:cursor-pointer  p-2 ${
            pathname == "/"
              ? "bg-slate-200 opacity-70 rounded-lg shadow-lg "
              : ""
          } `}
        >
          <FeedIcon />
        </div>
        <div
          onClick={() => {
            navigate("/fav");
          }}
          className={`favorite hover:cursor-pointer p-2 ${
            pathname == "/fav"
              ? "bg-slate-200 opacity-70 rounded-lg shadow-lg "
              : ""
          }`}
        >
          <FavoriteIcon />
        </div>
        <div
          onClick={() => {
            navigate("/myList");
          }}
          className={`myList hover:cursor-pointer p-2 ${
            pathname == "/myList"
              ? "bg-slate-200 opacity-70 rounded-lg shadow-lg "
              : ""
          }`}
        >
          <ListIcon />
        </div>
        <div
          onClick={() => {
            navigate("/login");
          }}
          className={`login hover:cursor-pointer p-2 ${
            pathname == "/login"
              ? "bg-slate-200 opacity-70 rounded-lg shadow-lg "
              : ""
          }`}
        >
          sign-in
        </div>
        <div
          onClick={() => {
            navigate("/signup");
          }}
          className={`signup hover:cursor-pointer p-2 ${
            pathname == "/signup"
              ? "bg-slate-200 opacity-70 rounded-lg shadow-lg "
              : ""
          }`}
        >
          sign-up
        </div>
        {localStorage.getItem("token") ? (
          <div
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
            }}
            className="logOut hover:cursor-pointer p-2"
          >
            <LogoutIcon />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Nav;
