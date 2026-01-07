#!/bin/bash

################## README ##################
# ・1番目のパラメータに、変更を加えたコミットのSHA1を渡して下さい。
# ・当ファイルとdiff_files_list_by_game.txtの改行コードは LF に揃えて下さい。
############################################

SHA1=$1
COMMIT_FILE=commit_list.txt
DIFF_FILES_LIST=diff_files_list_by_game.txt
BOAT_DIR=../../001boat/b001.demorental.net
HORSE_DIR=../../002horse/h001.demorental.net
BICYCLE_DIR=../../003bicycle/bi001.demorental.net

# develop ブランチにそろえる
cd "${HORSE_DIR}" || exit
pwd
git checkout develop
git pull origin develop
cd "${BICYCLE_DIR}" || exit
pwd
git checkout develop
git pull origin develop
cd "${BOAT_DIR}" || exit
pwd
# git checkout develop
git checkout master
git pull origin master

# コミット一覧をファイルに出力
git diff "${SHA1}"^.."${SHA1}" --name-only > "${COMMIT_FILE}"

# コミット一覧FILEを読み込んで処理
while read -r LINE
do
    IS_DIFF_FILE=false
    while read -r DIFF_FILE
    do
        if [ "$DIFF_FILE" == "$LINE" ]; then
            echo "${LINE} は直接編集してください。"
            IS_DIFF_FILE=true
            break
        fi
    done < ../../yosou_tools/"${DIFF_FILES_LIST}"

    if "${IS_DIFF_FILE}"; then
        # 直接編集が必要なファイルはスキップ
        continue
    fi

    # ファイル存在確認
    if [ -e "${LINE}" ]; then
        # 存在したら上書き || 新規ファイル作成
        echo "【Overwrite】 ${LINE}"
        cp -f "${LINE}" "${HORSE_DIR}"/"${LINE}"
        cp -f "${LINE}" "${BICYCLE_DIR}"/"${LINE}"
    else
        # 存在しなかったら削除
        echo "【Remove】 ${LINE}"
        rm -f "${HORSE_DIR}"/"${LINE}"
        rm -f "${BICYCLE_DIR}"/"${LINE}"
    fi

done < "${COMMIT_FILE}"

rm -rf "${COMMIT_FILE}"
