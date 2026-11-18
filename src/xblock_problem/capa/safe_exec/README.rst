Configuring Capa sandboxed execution
====================================

Capa problem code is executed in a sandbox provided by `CodeJail`_. This package
sends code to a remote `codejail-service`_ over its REST API.

By default, tests mock the service request and execute code locally using
CodeJail's ``not_safe_exec`` function. This avoids requiring a running service
in CI but does not test sandbox isolation.

For local testing against the service, follow the `deployment instructions`_.
The service can also be deployed with the `CodeJail Tutor plugin`_; Tutor must
run in dev mode to expose the service's HTTP port outside the Docker network.
Then set these values in ``test_settings.py``:

.. code-block:: python

    CODE_JAIL_REST_SERVICE_REMOTE_EXEC = (
        "xblock_problem.capa.safe_exec.remote_exec.send_safe_exec_request_v0"
    )
    CODE_JAIL_REST_SERVICE_HOST = "http://localhost:8550"

Configuration for ``codejail-service``, including sandbox limits, is managed by
the service.

.. _CodeJail: https://github.com/openedx/codejail
.. _codejail-service: https://github.com/openedx/codejail-service
.. _deployment instructions: https://github.com/openedx/codejail-service/blob/main/docs/deployment.rst
.. _CodeJail Tutor plugin: https://github.com/eduNEXT/tutor-contrib-codejail
