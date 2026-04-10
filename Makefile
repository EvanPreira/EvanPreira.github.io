CYAN_COLOR := \033[34;1m
NO_COLOR := \033[0m
ANSIBLE_DIR := ansible
BASH_DIR := scripts 

.PHONY: help
.DEFAULT_GOAL: help

help: ## Show this help message
	@grep -E "^[a-zA-Z_-]+.*: ## .*$$"$(MAKEFILE_LIST)
	