---
sidebar_position: 5
sidebar_label: 'Bando de Dados'
---

## PostgresSQL

Required version: 9.6 or newer

```
sudo apt install apt install postgresql
sudo vim /etc/postgresql/16/main/pg_hba.conf
sudo vim /etc/postgresql/16/main/postgresql.conf
```

Vamos criar um usuário para o monitoramento and conceder a permissão **pg_stat_database**

```
CREATE USER monitoring WITH PASSWORD '<PASSWORD>';
GRANT pg_monitor TO monitoring;
GRANT SELECT ON pg_stat_database TO monitoring;
```

Agora precisamos do Otel Telemetry Collector para coletar as métricas atraves de querys

```
docker pull otel/opentelemetry-collector-contrib

docker run -d -v $(pwd)/otel-config.yaml:/etc/otel-config.yaml otel/opentelemetry-collector-contrib --config /etc/otel-config.yaml
```


Otel Config

```
receivers:
  postgresql:
    endpoint: 192.168.3.183:5432
    collection_interval: 30s
    username: monitoring
    password: a312kdfafHAFh34da
    databases: []
    tls:
      insecure: true

processors:
  batch:
  attributes:
    actions:
      - key: portgresql_service_name
        value: raw-devops-postgresql
        action: insert

exporters:
  otlp:
    endpoint: "192.168.3.181:4317"
    tls:
      insecure: true

service:
  pipelines:
    metrics:
      receivers: [postgresql]
      processors: [batch, attributes]
      exporters: [otlp]
```

SigNoz Variable

```
SELECT DISTINCT JSONExtractString(labels, 'portgresql_service_name') AS extracted_label
FROM signoz_metrics.distributed_time_series_v2
WHERE JSONExtractString(labels, '__name__') = 'postgresql_db_size'
```


Checkpoint metricas
postgresql_blocks_read
postgresql_index_scans
postgresql_index_size
postgresql_operations
postgresql_rows
postgresql_table_size
postgresql_table_vacuum_count
postgresql_backends
postgresql_bgwriter_buffers_allocated
postgresql_bgwriter_buffers_writes
postgresql_bgwriter_checkpoint_count
postgresql_bgwriter_duration
postgresql_bgwriter_maxwritten
postgresql_commits
postgresql_connection_max
postgresql_database_count
postgresql_database_locks
postgresql_db_size
postgresql_rollbacks
postgresql_table_count
postgresql_deadlocks
postgresql_sequential_scans



## MongoDB

