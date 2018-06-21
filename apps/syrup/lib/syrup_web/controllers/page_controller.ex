defmodule SyrupWeb.PageController do
  use SyrupWeb, :controller

  def index(conn, _params) do
    message = SyrupBackend.get_message()
    render conn, "index.html", message: message
  end
end
