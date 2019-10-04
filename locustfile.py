from locust import HttpLocust, TaskSet, task

class HashTaskSet(TaskSet):
    @task
    def get_hash(self):
        self.client.get("/hash")

class Hash(HttpLocust):
    task_set = HashTaskSet
    min_wait = 100
    max_wait = 500
