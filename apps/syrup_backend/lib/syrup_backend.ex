defmodule SyrupBackend do
  alias SyrupBackend.MessageProvider
  @moduledoc """
  Documentation for SyrupBackend.
  """

  @doc """
  Hello world.

  ## Examples

      iex> SyrupBackend.hello
      :world

  """
  def hello do
    :world
  end

  def start(_type, _args) do
    import Supervisor.Spec, warn: false

    children = [
      worker(MessageProvider, [:message_provider]),
    ]
    opts = [strategy: :one_for_one, name: Test.Supervisor]
    Supervisor.start_link(children, opts)
  end

  def get_message do
    MessageProvider.get_message(:message_provider)
  end
end
