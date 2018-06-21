defmodule SyrupBackendTest do
  use ExUnit.Case
  doctest SyrupBackend

  test "greets the world" do
    assert SyrupBackend.hello() == :world
  end

  test "getting the message" do
    assert SyrupBackend.get_message() == "•" || "••" || "•••"
  end
end
