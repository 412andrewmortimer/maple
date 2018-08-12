defmodule MapleAuthWeb.PageController do
  use MapleAuthWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
