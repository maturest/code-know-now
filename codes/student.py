"""
学生管理系统模块
提供学生信息的增删改查等基本管理功能
"""

students = []


def add_student():
    """
    添加新学生信息
    收集学生的学号、姓名、年龄和性别信息，并确保学号不重复
    """
    # 验证学号
    while True:
        student_id = input("请输入学号：").strip()
        if not student_id:
            print("错误：学号不能为空")
            continue
        if any(s["id"] == student_id for s in students):
            print("错误：学号已存在")
            continue
        break

    # 验证姓名
    while True:
        name = input("请输入姓名：").strip()
        if not name:
            print("错误：姓名不能为空")
            continue
        break

    # 验证年龄
    while True:
        age = input("请输入年龄：").strip()
        if not age:
            print("错误：年龄不能为空")
            continue
        if not age.isdigit():
            print("错误：年龄必须为数字")
            continue
        age = int(age)
        if not 0 <= age <= 120:
            print("错误：年龄必须在 0-120 之间")
            continue
        break

    # 验证性别
    valid_genders = {"男", "女"}
    while True:
        gender = input(f"请输入性别（{'/'.join(valid_genders)}）：").strip()
        if gender not in valid_genders:
            print(f"错误：性别必须是 {' 或 '.join(valid_genders)}")
            continue
        break

    # 添加学生信息
    student = {"id": student_id, "name": name, "age": age, "gender": gender}
    students.append(student)

    # 使用中文字段名显示学生信息
    field_names = {"id": "学号", "name": "姓名", "age": "年龄", "gender": "性别"}

    print("\n添加成功！学生信息如下：")
    print("-" * 20)
    for field, value in student.items():
        print(f"{field_names[field]}: {value}")


def delete_student():
    """
    删除指定学号的学生信息
    """
    student_id = input("请输入要删除的学生学号：").strip()
    if not student_id:
        print("错误：学号不能为空")
        return

    # 使用 next() 和生成器表达式查找学生
    try:
        student = next(s for s in students if s["id"] == student_id)
        students.remove(student)
        print(f"\n学号为 {student_id} 的学生信息已删除")
    except StopIteration:
        print("错误：未找到该学生！")


def modify_student():
    """
    修改指定学号学生的信息
    支持修改姓名、年龄和性别，空输入保持原值不变
    """

    def modify_field(student, field, label):
        """处理单个字段的修改"""
        while True:
            value = input(f"请输入新{label}（回车保持原值）：").strip()
            if not value:
                return True

            if field == "age":
                if not value.isdigit():
                    print("错误：年龄必须为数字")
                    continue
                age = int(value)
                if not 0 <= age <= 120:
                    print("错误：年龄必须在 0-120 之间")
                    continue
                student[field] = age
            elif field == "gender":
                valid_genders = {"男", "女"}
                if value not in valid_genders:
                    print(f"错误：性别必须是 {' 或 '.join(valid_genders)}")
                    continue
                student[field] = value
            else:  # name
                if not value:
                    print("错误：姓名不能为空")
                    continue
                student[field] = value
            return True

    student_id = input("请输入要修改的学生学号：").strip()
    if not student_id:
        print("错误：学号不能为空")
        return

    try:
        student = next(s for s in students if s["id"] == student_id)
        fields = {"name": "姓名", "age": "年龄", "gender": "性别"}

        # 显示当前信息
        print("\n当前学生信息：")
        print("-" * 20)
        print("\n".join(f"{v}：{student[k]}" for k, v in fields.items()))
        print("-" * 20)

        # 修改信息
        for field, label in fields.items():
            modify_field(student, field, label)

        print("\n修改成功！更新后的信息：")
        print("-" * 20)
        print("\n".join(f"{v}：{student[k]}" for k, v in fields.items()))
    except StopIteration:
        print("错误：未找到该学生！")


def search_student():
    """
    查询学生信息
    支持通过学号或姓名查询，以表格形式显示所有匹配的学生信息
    """
    keyword = input("请输入学号或姓名：").strip()
    if not keyword:
        print("错误：搜索关键词不能为空")
        return

    fields = {"id": "学号", "name": "姓名", "age": "年龄", "gender": "性别"}

    # 使用更精确的匹配方式
    matched_students = [
        student
        for student in students
        if keyword == student["id"] or keyword in student["name"]
    ]

    if not matched_students:
        print(f"错误：未找到包含关键词 '{keyword}' 的学生信息！")
        return

    # 打印表头和结果数量
    print(f"\n找到 {len(matched_students)} 条匹配结果：")
    print("-" * 50)
    print("".join(f"{label:<12}" for label in fields.values()))
    print("-" * 50)

    # 打印学生信息并进行编号
    for i, student in enumerate(matched_students, 1):
        print(f"{i}. " + "".join(f"{student[field]:<12}" for field in fields))
    print("-" * 50 + "\n")


def show_all():
    """
    显示所有学生信息
    以表格形式展示学生的基本信息
    """
    if not students:
        print("\n当前没有学生信息")
        return

    fields = {"id": "学号", "name": "姓名", "age": "年龄", "gender": "性别"}

    # 计算总人数和表格宽度
    total = len(students)
    width = 50

    # 打印表头
    print(f"\n共有 {total} 名学生：")
    print("-" * width)
    print("序号 " + "".join(f"{label:<12}" for label in fields.values()))
    print("-" * width)

    # 打印学生信息（带序号）
    for i, student in enumerate(students, 1):
        print(f"{i:<4} " + "".join(f"{student[field]:<12}" for field in fields))

    # 打印表尾
    print("-" * width)
    print(f"共计 {total} 条记录\n")


def main():
    """
    学生管理系统的主程序入口
    提供菜单驱动的交互式操作界面
    """
    # 定义菜单选项和对应的操作
    menu_options = {
        "1": ("添加学生", "录入新学生的学号、姓名、年龄和性别信息", add_student),
        "2": ("删除学生", "通过学号删除指定学生的所有信息", delete_student),
        "3": ("修改学生", "通过学号修改学生的基本信息", modify_student),
        "4": ("查询学生", "通过学号或姓名查询学生信息", search_student),
        "5": ("显示所有", "以表格形式显示所有在校学生信息", show_all),
        "6": (
            "退出系统",
            "保存并退出学生管理系统",
            lambda: print("感谢使用学生管理系统！"),
        ),
    }

    def print_help():
        """显示帮助信息"""
        print("\n" + "=" * 50)
        print("【学生信息管理系统】使用说明：".center(48))
        print("=" * 50)
        for key, (name, desc, _) in menu_options.items():
            print(f"{key}、{name:<4} - {desc}")
        print("=" * 50)

    # 显示欢迎信息和使用说明
    print_help()
    input("\n按回车键开始使用系统...")

    # 主循环
    while True:
        try:
            choice = input("\n请输入操作选项(1-6)或 h 显示帮助信息：").strip().lower()

            if choice == "h":
                print_help()
                continue

            if not choice:
                print("错误：输入不能为空！")
                continue

            if choice not in menu_options:
                print("错误：无效的选项！请输入 1-6 的数字或 h 获取帮助")
                continue

            name, _, action = menu_options[choice]
            print(f"\n开始执行：{name}")
            print("-" * 20)

            action()

            if choice == "6":
                break

            input("\n按回车键继续...")
            print("\n" + "=" * 50)

        except (ValueError, TypeError) as e:
            print(f"\n输入数据错误：{str(e)}")
            print("系统将退出...")
        except KeyboardInterrupt:
            print("\n\n用户中断，系统将退出...")
        except IOError as e:
            print(f"\n输入输出错误：{str(e)}")
            print("系统将退出...")
        finally:
            # 这里可以添加数据保存等清理工作
            pass


if __name__ == "__main__":
    main()
