# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :maple_auth,
  namespace: MapleAuth,
  ecto_repos: [MapleAuth.Repo]

# Configures the endpoint
config :maple_auth, MapleAuthWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "CycAcNBeS3xsrC6u4yxMFVW+M7EwbpipeX+C+TpkxShL3w9ZnSMu1CQrmrw1cYcU",
  render_errors: [view: MapleAuthWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: MapleAuth.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
