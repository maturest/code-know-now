import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

try:
    # 某些操作
    10 / 0
    pass
except Exception as e:
    logger.exception("操作失败")  # 自动记录堆栈信息